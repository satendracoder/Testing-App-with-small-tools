import { TestBed } from '@angular/core/testing';

import { SvoicePlayService } from './svoice-play.service';

describe('SvoicePlayService', () => {
  let service: SvoicePlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvoicePlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
