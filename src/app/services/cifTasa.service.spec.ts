import { TestBed } from '@angular/core/testing';

import { cifService } from './cifTasa.service';

describe('cifService', () => {
  let service: cifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
