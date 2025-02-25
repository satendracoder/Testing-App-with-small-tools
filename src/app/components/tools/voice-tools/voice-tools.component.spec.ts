import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceToolsComponent } from './voice-tools.component';

describe('VoiceToolsComponent', () => {
  let component: VoiceToolsComponent;
  let fixture: ComponentFixture<VoiceToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
