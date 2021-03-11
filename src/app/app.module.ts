import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaAlunosComponent } from './tabela-alunos/tabela-alunos.component';
import { SoteadorComponent } from './soteador/soteador.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    TabelaAlunosComponent,
    SoteadorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
