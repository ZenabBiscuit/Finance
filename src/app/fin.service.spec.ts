import { TestBed } from '@angular/core/testing';

import { FinService } from './fin.service';

describe('FinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinService = TestBed.get(FinService);
    expect(service).toBeTruthy();
  });
});
