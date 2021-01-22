import { TestBed } from '@angular/core/testing';

import { LocalStorageWrapperService } from './local-storage-wrapper.service';

describe('LocalStorageWrapperService', () => {
  let service: LocalStorageWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
