import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soteador',
  templateUrl: './soteador.component.html',
  styleUrls: ['./soteador.component.css']
})
export class SoteadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  metodoTeste(texto) {
    console.log(texto);

  }

}
