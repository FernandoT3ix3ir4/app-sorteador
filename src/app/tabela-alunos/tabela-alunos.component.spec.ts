import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAlunosComponent } from './tabela-alunos.component';

describe('TabelaAlunosComponent', () => {
  let component: TabelaAlunosComponent;
  let fixture: ComponentFixture<TabelaAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
