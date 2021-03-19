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

  alunosParticipantes: Aluno[] = [];

  ganhadores: Aluno[] = [];

  constructor(private http: HttpClient) {
  }

  geradorNumerosDaSorte(): number {

    const numeroDaSorte = Math.floor(Math.random() * 100 + 1);

    if (numeroDaSorte && !this.numerosDaSorte.includes(numeroDaSorte) && numeroDaSorte > 9) {
      this.numerosDaSorte.push(numeroDaSorte);
      return numeroDaSorte;
    }

    return this.geradorNumerosDaSorte();
  }

  obterListaALunos(): Promise<Aluno[]> {
    return this.http.get<Aluno[]>('assets/alunos.json')
      .toPromise()
      .then(alunos => alunos.sort((a, b) => (b.nome > a.nome ? -1 : 1)));
  }

  sortear(): Observable<Aluno> {
    const currentIndex = this.alunosParticipantes.length;

    const randomIndex = Math.floor(Math.random() * currentIndex);

    if (this.decisorSorteio(randomIndex)) {
      return of(this.alunosParticipantes[randomIndex]);
    }

    return this.sortear();
  }

  private decisorSorteio(randomIndex: number): boolean {
    return !this.alunosParticipantes[randomIndex].sorteado &&
      this.ganhadores
        .filter(ganhador =>
          ganhador.professora === this.alunosParticipantes[randomIndex].professora).length < 2 &&
      this.ganhadores
        .filter(ganhador =>
          ganhador.professora === this.alunosParticipantes[randomIndex].professora &&
          ganhador.genero === this.alunosParticipantes[randomIndex].genero).length === 0;
  }

  marcarGanhador(ganhador: Aluno): void {
    this.alunosParticipantes.find(aluno => aluno.id === ganhador.id).sorteado = true;
    this.alunosParticipantes = [...this.alunosParticipantes];

  }


  preencherganhadores(ultimoGanhador: Aluno): void {
    if (this.ganhadores.length === 4) {
      this.ganhadores.pop();
    }

    this.ganhadores.unshift(this.alunosParticipantes.find(aluno => aluno.id === ultimoGanhador.id));

    if (this.ganhadores.length === 4) {
      console.log(this.ganhadores);
    }

  }
}
