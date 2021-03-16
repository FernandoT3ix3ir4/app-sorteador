import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SorteadorService {

  numerosDaSorte = [];

  listaAlunos = [{ id: 0, nome: "Gabriel Tigrão" }, { id: 0, nome: "Danilo" }, { id: 0, nome: "PH" }, { id: 0, nome: "Zero" }, { id: 0, nome: "Gabu" }];

  constructor() { }

  geradorNumerosDaSorte(): number {
    let numeroDaSorte = Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);

    if (!this.numerosDaSorte.includes(numeroDaSorte) && numeroDaSorte > 9) {
      this.numerosDaSorte.push(numeroDaSorte)
      return numeroDaSorte;
    }

    return this.geradorNumerosDaSorte();
  }
}
