import { TestBed } from '@angular/core/testing';

import { VoiceTakeService } from './voice-take.service';

describe('VoiceTakeService', () => {
  let service: VoiceTakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceTakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
