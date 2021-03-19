import { Component, OnInit, } from '@angular/core';
import { SorteadorService } from '../sorteador/sorteador.service';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.css']
})
export class TabelaAlunosComponent implements OnInit {

  listaDeAlunos: Aluno[];

  loading = false;

  constructor(public sorteadorService: SorteadorService) { }

  ngOnInit(): void {
    this.sorteadorService.obterListaALunos().then(alunos => {
      this.listaDeAlunos = JSON.parse(JSON.stringify(alunos));
      this.sorteadorService.listaAlunos = JSON.parse(JSON.stringify(alunos));
    });
  }

  gerarNumerosDaSorte(): void {
    this.loading = true;
    this.sorteadorService.numerosDaSorte = [];

    this.listaDeAlunos = [...this.sorteadorService.alunosParticipantes];

    this.listaDeAlunos.forEach(aluno => {
      aluno.id = this.sorteadorService.geradorNumerosDaSorte();
    });

    this.loading = false;
  }

  tornarTodosalunosParticipantes(checkValue): void {
    this.sorteadorService.alunosParticipantes = JSON.parse(JSON.stringify(this.listaDeAlunos));
    this.sorteadorService.alunosParticipantes.forEach(aluno => aluno.elegivel = checkValue);

    if (!checkValue) {
      this.sorteadorService.numerosDaSorte = [];
      this.sorteadorService.alunosParticipantes = [];
      this.listaDeAlunos = JSON.parse(JSON.stringify(this.sorteadorService.listaAlunos));
    }
  }

  tornarAlunoElegivel(aluno: Aluno, checkValue: boolean): void {
    aluno.elegivel = checkValue;
    this.sorteadorService.alunosParticipantes = this.listaDeAlunos.filter(aluno => aluno.elegivel);
  }

}
