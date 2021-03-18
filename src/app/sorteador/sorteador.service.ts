import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Aluno } from '../tabela-alunos/aluno.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SorteadorService {

  numerosDaSorte = [];

  listaAlunos: Aluno[];

  ganhadores: Aluno[] = [];

  constructor(private http: HttpClient) {
    this.obterListaALunos().then(alunos => { this.listaAlunos = alunos });
  }



  geradorNumerosDaSorte(): number {

    let numeroDaSorte = Math.floor(Math.random() * 100 + 1);

    if (numeroDaSorte && !this.numerosDaSorte.includes(numeroDaSorte) && numeroDaSorte > 9) {
      this.numerosDaSorte.push(numeroDaSorte)
      return numeroDaSorte;
    }

    return this.geradorNumerosDaSorte();
  }

  obterListaALunos() {
    return this.http.get<Aluno[]>('assets/alunos.json')
      .toPromise()
      .then(data => { return data.sort((a, b) => (b.nome > a.nome ? -1 : 1)); });
  }

  sortear(): Observable<Aluno> {
    let currentIndex = this.listaAlunos.length;

    let randomIndex = Math.floor(Math.random() * currentIndex);

    if (this.decisorSorteio(randomIndex)) {
      return of(this.listaAlunos[randomIndex]);
    }

    return this.sortear();
  }

  private decisorSorteio(randomIndex: number): boolean {
    return !this.listaAlunos[randomIndex].sorteado &&
      this.ganhadores
        .filter(ganhador =>
          ganhador.professora === this.listaAlunos[randomIndex].professora).length < 2 &&
      this.ganhadores
        .filter(ganhador =>
          ganhador.professora === this.listaAlunos[randomIndex].professora &&
          ganhador.genero === this.listaAlunos[randomIndex].genero).length == 0;
  }

  marcarGanhador(ganhador: Aluno) {
    this.listaAlunos.find(aluno => aluno.id === ganhador.id).sorteado = true;
    this.listaAlunos = [...this.listaAlunos];
  }


  preencherganhadores(ultimoGanhador: Aluno) {
    if (this.ganhadores.length === 4) {
      this.ganhadores.pop();
    }

    this.ganhadores.unshift(this.listaAlunos.find(aluno => aluno.id === ultimoGanhador.id));

    if (this.ganhadores.length === 4) {
      console.log(this.ganhadores);
    }

  }
}
