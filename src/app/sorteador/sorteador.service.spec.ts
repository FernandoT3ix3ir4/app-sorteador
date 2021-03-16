import { TestBed } from '@angular/core/testing';

import { SorteadorService } from './sorteador.service';

describe('SorteadorService', () => {
  let service: SorteadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorteadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
