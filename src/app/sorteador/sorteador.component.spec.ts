import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteadorComponent } from './sorteador.component';

describe('SorteadorComponent', () => {
  let component: SorteadorComponent;
  let fixture: ComponentFixture<SorteadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorteadorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
