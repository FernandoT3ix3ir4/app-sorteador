import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soteador',
  templateUrl: './soteador.component.html',
  styleUrls: ['./soteador.component.css']
})
export class SoteadorComponent implements OnInit {

  arr = [{ id: 2, nome: "Gabriel Tigrão" }, { id: 11, nome: "Danilo" }, { id: 37, nome: "PH" }, { id: 42, nome: "Zero" }, { id: 84, nome: "Gabu" }];

  loading = false;
  constructor() { }

  ngOnInit(): void {
    this.gerardorNumeroDaSorte();
  }

  sortear(array) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      let currentIndex = array.length;
      let randomIndex = Math.floor(Math.random() * currentIndex);
      alert(`Parabéns #: ${array[randomIndex].nome}`);

      let areta = this.arr.find(x => x.id === 11);
      alert(areta.nome);
    }, 1000);

  }

  gerardorNumeroDaSorte() {
    let numerosDaSorte = [];
    for (let index = 0; index < 50; index++) {
      let numeroDaSorte = this.geradorNumero();
      let numero = numerosDaSorte.find(x => x === numeroDaSorte);


      console.log();
    }
  }

  geradorNumero(): number {
    return Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);
  }



}
