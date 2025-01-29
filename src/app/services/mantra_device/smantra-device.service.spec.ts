import { TestBed } from '@angular/core/testing';

import { SmantraDeviceService } from './smantra-device.service';

describe('SmantraDeviceService', () => {
  let service: SmantraDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmantraDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
