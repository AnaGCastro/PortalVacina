import { TestBed } from '@angular/core/testing';

import { vacinaService } from './vacina.service';

describe('vacinaService', () => {
  let service: vacinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vacinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
