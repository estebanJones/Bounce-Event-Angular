import { TestBed } from '@angular/core/testing';

import { StatutConnecteService } from './statut-connecte.service';

describe('StatutConnecteService', () => {
  let service: StatutConnecteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutConnecteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
