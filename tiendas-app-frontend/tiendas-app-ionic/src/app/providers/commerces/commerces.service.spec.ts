import { TestBed } from '@angular/core/testing';

import { CommercesService } from './commerces.service';

describe('CommerceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommercesService = TestBed.get(CommercesService);
    expect(service).toBeTruthy();
  });
});
