import { Component, } from '@angular/core';
import { SorteadorService } from '../sorteador/sorteador.service';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.css']
})
export class TabelaAlunosComponent {

  listaAlunos: Aluno[];

  loading = false;

  constructor(public sorteadorService: SorteadorService) { }


  gerarNumerosDaSorte() {
    this.loading = true;
    this.sorteadorService.numerosDaSorte = [];
    this.sorteadorService.listaAlunos.forEach(aluno => {
      aluno.id = this.sorteadorService.geradorNumerosDaSorte();
    });

    this.loading = false;
  }


}
