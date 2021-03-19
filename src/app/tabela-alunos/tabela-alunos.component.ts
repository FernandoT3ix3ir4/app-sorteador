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
      this.listaDeAlunos = alunos;
      this.sorteadorService.listaAlunos = alunos;
    });
  }


  gerarNumerosDaSorte(): void {
    this.loading = true;
    this.sorteadorService.numerosDaSorte = [];
    this.listaDeAlunos.forEach(aluno => {
      if (aluno.elegivel) {
        const alunoElegivel = aluno;
        alunoElegivel.id = this.sorteadorService.geradorNumerosDaSorte();
        this.sorteadorService.alunosElegiveis.push(alunoElegivel);
      }
    });

    this.loading = false;
  }

  tornarTodosAlunosElegiveis(checkValue): void {
    if (checkValue) {
      this.sorteadorService.alunosElegiveis = [...this.listaDeAlunos];
      this.sorteadorService.alunosElegiveis.forEach(aluno => aluno.elegivel = checkValue);

    } else {
      this.sorteadorService.alunosElegiveis = [];
    }
  }


}
