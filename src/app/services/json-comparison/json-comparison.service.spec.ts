import { TestBed } from '@angular/core/testing';

import { JsonComparisonService } from './json-comparison.service';

describe('JsonComparisonService', () => {
  let service: JsonComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
