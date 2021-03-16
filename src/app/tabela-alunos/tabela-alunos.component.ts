import { Component, OnInit } from '@angular/core';
import { SorteadorService } from '../sorteador/sorteador.service';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.css']
})
export class TabelaAlunosComponent implements OnInit {

  listaAlunos: Aluno[];

  loading = false;

  constructor(private sorteadorService: SorteadorService) { }

  ngOnInit(): void {
    this.sorteadorService.obterListaALunos().then(alunos => { this.sorteadorService.listaAlunos = alunos });
    this.listaAlunos = this.sorteadorService.listaAlunos;

  }


  gerarNumerosDaSorte() {
    this.loading = true;
    this.sorteadorService.numerosDaSorte = [];
    this.sorteadorService.listaAlunos.forEach(aluno => {
      aluno.id = this.sorteadorService.geradorNumerosDaSorte();
    });

    this.loading = false;
    this.ngOnInit();
  }


}
