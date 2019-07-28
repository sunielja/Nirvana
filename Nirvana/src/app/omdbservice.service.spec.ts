import { TestBed } from '@angular/core/testing';

import { OMDBServiceService } from './omdbservice.service';

describe('OMDBServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OMDBServiceService = TestBed.get(OMDBServiceService);
    expect(service).toBeTruthy();
  });
});
