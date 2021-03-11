import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soteador',
  templateUrl: './soteador.component.html',
  styleUrls: ['./soteador.component.css']
})
export class SoteadorComponent implements OnInit {

  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

  metodoTeste(texto) {
    console.log(texto);
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 5000);

  }

}
