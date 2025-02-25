import { Component } from '@angular/core';
import { SvoicePlayService } from '../../../services/voice/svoice-play.service';

@Component({
  selector: 'app-voice-tools',
  imports: [],
  templateUrl: './voice-tools.component.html',
  styleUrl: './voice-tools.component.scss'
})
export class VoiceToolsComponent {
  currentLanguage: string = 'English';
  constructor(private Voice_api: SvoicePlayService) {}
  // 🟢 Toggle Language
  switchLanguage() {
    this.Voice_api.toggleLanguage();
    this.currentLanguage = this.Voice_api.getLanguage() === 'en' ? 'English' : 'हिंदी';
  }

  // 🟢 Process Transaction and Speak
  processTransaction(amount: number) {
    console.log(`Transaction Successful of ₹${amount}`);
    this.Voice_api.speak(amount);
  }
}
