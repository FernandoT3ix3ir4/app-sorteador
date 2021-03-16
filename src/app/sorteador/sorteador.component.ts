import { Component, OnInit } from '@angular/core';
import { SorteadorService } from './sorteador.service';

@Component({
  selector: 'app-sorteador',
  templateUrl: './sorteador.component.html',
  styleUrls: ['./sorteador.component.css']
})
export class SorteadorComponent implements OnInit {

  listaAlunos = [];

  loading = false;

  constructor(private sorteadorService: SorteadorService) { }

  ngOnInit(): void {
    this.listaAlunos = this.sorteadorService.listaAlunos;
    this.gerardorNumeroDaSorte();
  }

  sortear(listaAlunos) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      let currentIndex = listaAlunos.length;
      let randomIndex = Math.floor(Math.random() * currentIndex);
      alert(`Parabéns #: ${listaAlunos[randomIndex].nome}`);

    }, 1000);

  }

  gerardorNumeroDaSorte() {
    for (let index = 0; index < this.listaAlunos.length; index++) {
      this.listaAlunos[index].id = this.sorteadorService.geradorNumerosDaSorte();
    }
  }

}
