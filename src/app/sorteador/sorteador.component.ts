import { Component, OnInit } from '@angular/core';
import { SorteadorService } from './sorteador.service';

@Component({
  selector: 'app-sorteador',
  templateUrl: './sorteador.component.html',
  styleUrls: ['./sorteador.component.css']
})
export class SorteadorComponent implements OnInit {


  loading = false;

  constructor(private sorteadorService: SorteadorService) { }

  ngOnInit(): void {
  }

  sortear() {
    this.loading = true;

    setTimeout(() => {
      this.sorteadorService.sortear().subscribe(aluno => {
        this.loading = false;
        alert(`Parabéns #: ${aluno.nome}`);
      });
    }, 5000);
  }


}
