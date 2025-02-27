import { TestBed } from '@angular/core/testing';

import { JsonValidaionService } from './json-validaion.service';

describe('JsonValidaionService', () => {
  let service: JsonValidaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonValidaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
