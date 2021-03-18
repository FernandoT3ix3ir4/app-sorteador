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

  tresUltimosGanhadores: Aluno[] = [];

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

    if (!this.listaAlunos[randomIndex].sorteado) {
      return of(this.listaAlunos[randomIndex]);
    }

    return this.sortear();
  }

  marcarGanhador(ganhador: Aluno) {
    this.listaAlunos.find(aluno => aluno.id === ganhador.id).sorteado = true;
    this.listaAlunos = [...this.listaAlunos];

  }


  preencherTresUltimosGanhadores(ultimoGanhador: Aluno) {
    if (this.tresUltimosGanhadores.length === 3) {
      this.tresUltimosGanhadores.pop();
    }

    this.tresUltimosGanhadores.unshift(this.listaAlunos.find(aluno => aluno.id === ultimoGanhador.id));

  }
}
