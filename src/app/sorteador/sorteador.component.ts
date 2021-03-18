import { Aluno } from './../tabela-alunos/aluno.model';
import { Component } from '@angular/core';
import { SorteadorService } from './sorteador.service';

@Component({
  selector: 'app-sorteador',
  templateUrl: './sorteador.component.html',
  styleUrls: ['./sorteador.component.css']
})
export class SorteadorComponent {

  loading = false;

  mostrarPopUp = false;

  aluno: Aluno = new Aluno;

  header: string;


  constructor(public sorteadorService: SorteadorService) { }

  sortear() {
    this.header = 'Que rufem os tambores!!!'
    this.loading = true;

    this.sorteadorService.sortear().subscribe(aluno => {
      this.aluno = aluno;
      this.mostrarPopUp = true;
      setTimeout(() => {
        this.header = `Parabéns ${aluno.nome}!!!`;
        this.loading = false;
      }, 5000);
    });
  }


  desabilitarBotaoSorteio(): boolean {
    return this.sorteadorService.numerosDaSorte.length === 0 || this.mostrarPopUp;
  }

  fecharDialog() {
    this.sorteadorService.marcarGanhador(this.aluno);
    this.sorteadorService.preencherTresUltimosGanhadores(this.aluno);
    this.mostrarPopUp = false;
  }
}
