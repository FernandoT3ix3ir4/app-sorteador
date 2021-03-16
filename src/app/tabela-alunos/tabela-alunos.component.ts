import { Component, OnInit } from '@angular/core';
import { SorteadorService } from '../sorteador/sorteador.service';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.css']
})
export class TabelaAlunosComponent implements OnInit {

  constructor(private sorteadorService: SorteadorService) { }

  ngOnInit(): void {

  }


  gerarNumerosDaSorte() {
    this.sorteadorService.numerosDaSorte = [];
    this.sorteadorService.listaAlunos.forEach(aluno => {
      aluno.id = this.sorteadorService.geradorNumerosDaSorte();
    });

    console.log(this.sorteadorService.listaAlunos);
  }

}
