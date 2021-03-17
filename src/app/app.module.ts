import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabelaAlunosComponent } from './tabela-alunos/tabela-alunos.component';
import { SorteadorComponent } from './sorteador/sorteador.component';

import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    TabelaAlunosComponent,
    SorteadorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule,
    CardModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
