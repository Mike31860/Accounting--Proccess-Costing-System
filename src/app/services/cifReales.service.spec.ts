import { TestBed } from '@angular/core/testing';

import { cifRealService } from './cifReales.service';

describe('cifService', () => {
  let service: cifRealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cifRealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
