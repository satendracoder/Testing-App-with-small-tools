import { TestBed } from '@angular/core/testing';

import { JsonFormatterService } from './json-formatter.service';

describe('JsonFormatterService', () => {
  let service: JsonFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
