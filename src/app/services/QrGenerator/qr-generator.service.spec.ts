import { TestBed } from '@angular/core/testing';

import { QrGeneratorService } from './qr-generator.service';

describe('QrGeneratorService', () => {
  let service: QrGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
