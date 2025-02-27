import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTakeComponent } from './voice-take.component';

describe('VoiceTakeComponent', () => {
  let component: VoiceTakeComponent;
  let fixture: ComponentFixture<VoiceTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceTakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
