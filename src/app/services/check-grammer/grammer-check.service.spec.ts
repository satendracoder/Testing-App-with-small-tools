import { TestBed } from '@angular/core/testing';

import { GrammerCheckService } from './grammer-check.service';

describe('GrammerCheckService', () => {
  let service: GrammerCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammerCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
