import { TestBed } from '@angular/core/testing';

import { LatheStorageService } from './lathe-storage-service';

describe('LatheStorageService', () => {
  let service: LatheStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatheStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
