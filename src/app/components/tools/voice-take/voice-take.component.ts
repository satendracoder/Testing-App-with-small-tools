import { Component } from '@angular/core';
import { VoiceTakeService } from '../../../services/voice-take/voice-take.service';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-voice-take',
  imports: [MateriallistModule],
  templateUrl: './voice-take.component.html',
  styleUrl: './voice-take.component.scss'
})
export class VoiceTakeComponent {
  constructor(
    
    public speechService: VoiceTakeService) {}

  // 🟢 Start Listening
  startVoiceCommand() {
    this.speechService.startListening();
  }



  // 🔴 Stop Listening
  stopVoiceCommand() {
    this.speechService.stopListening();
  }

}
