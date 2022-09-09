import { TestBed } from '@angular/core/testing';

import { CrsServiceService } from './crs-service.service';

describe('CrsServiceService', () => {
  let service: CrsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
