import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoteadorComponent } from './soteador.component';

describe('SoteadorComponent', () => {
  let component: SoteadorComponent;
  let fixture: ComponentFixture<SoteadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoteadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
