import { Component } from '@angular/core';
import { SorteadorService } from './sorteador/sorteador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sorteadorService: SorteadorService) {
    this.sorteadorService.obterListaALunos().then(alunos => { this.sorteadorService.listaAlunos = alunos });

  }
}
