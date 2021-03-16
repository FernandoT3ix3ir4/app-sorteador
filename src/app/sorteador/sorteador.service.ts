import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Aluno } from '../tabela-alunos/aluno.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SorteadorService {

  numerosDaSorte = [];

  listaAlunos: Aluno[];

  constructor(private http: HttpClient) {
    this.obterListaALunos().then(alunos => { this.listaAlunos = alunos });
  }



  geradorNumerosDaSorte(): number {
    let numeroDaSorte = Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);

    if (!this.numerosDaSorte.includes(numeroDaSorte) && numeroDaSorte > 9) {
      this.numerosDaSorte.push(numeroDaSorte)
      return numeroDaSorte;
    }

    return this.geradorNumerosDaSorte();
  }

  obterListaALunos() {
    return this.http.get<Aluno[]>('assets/alunos.json').toPromise()
      .then(data => { return data; });;
  }

  sortear(): Observable<Aluno> {
    let currentIndex = this.listaAlunos.length;
    let randomIndex = Math.floor(Math.random() * currentIndex);
    return of(this.listaAlunos[randomIndex]);
  }
}