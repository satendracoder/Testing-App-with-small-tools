import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { SvoicePlayService } from '../voice/svoice-play.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface CustomWindow extends Window {
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}

declare var window: CustomWindow;

@Injectable({
  providedIn: 'root'
})
export class VoiceTakeService {

  recognition: any;
  isListening: boolean = false;
  transcript: string = '';

  constructor(
    private Voice_api: SvoicePlayService,
    private zone: NgZone,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const SpeechRecognition =
        window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        // 🟢 Voice Input Event
        this.recognition.onresult = (event: any) => {
          const speechResult = event.results[0][0].transcript.toLowerCase();
          console.log('Voice Command:', speechResult);

          this.zone.run(() => {
            this.transcript = speechResult;
            this.processCommand(speechResult);
          });
        };

        // 🔴 Error Handling
        this.recognition.onerror = (event: any) => {
          console.error('Speech Recognition Error:', event.error);
        };

        // 🔴 Stop Event
        this.recognition.onend = () => {
          console.log('Speech Recognition Ended');
          this.isListening = false;
        };
      } else {
        console.warn('Speech Recognition Not Supported');
      }
    }
  }

  // 🟢 Start Listening
  startListening() {
    if (isPlatformBrowser(this.platformId) && this.recognition) {
      this.isListening = true;
      this.recognition.start();
    }
  }

  // 🟢 Stop Listening
  stopListening() {
    if (isPlatformBrowser(this.platformId) && this.recognition) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // 🟢 Process Voice Commands
  processCommand(command: string) {
    if (
      command.includes('aadhaar') ||
      command.includes('aadhar') ||
      command.includes('aps') ||
      command.includes('eps') ||
      command.includes('apes') ||
      command.includes('paise nikalna') ||
      command.includes('banking') ||
      command.includes('bank service')
    ) {
      this.router.navigate(['/tools/new_qr']);
    } else if (command.includes('home')) {
      this.router.navigate(['/']);
    } else if (
      command.includes('QR code') ||
      command.includes('qr code') ||
      command.includes('qr') ||
      command.includes('qr code generator')
    ) {
      this.router.navigateByUrl('/tools/new_qr');
    } else if (
      command.includes('Background remove') ||
      command.includes('bg remove') ||
      command.includes('background remove')
    ) {
      this.router.navigateByUrl('/tools/bg');
    } else if (
      command.includes('Word Counter') ||
      command.includes('text analysis') ||
      command.includes('word count')
    ) {
      this.router.navigateByUrl('/tools/bg');
    } else if (
      command.includes('grammar checker') ||
      command.includes('spelling checker') ||
      command.includes('meaning checker') ||
      command.includes('text checker')
    ) {
      this.router.navigateByUrl('/tools/grammar_checker');
    } else if (
      command.includes('json formatter') ||
      command.includes('json tool') ||
      command.includes('json')
    ) {
      this.router.navigateByUrl('/tools/json-formatter');
    } else if (
      command.includes('json Comparison') ||
      command.includes('json compare') ||
      command.includes('json duplicate')
    ) {
      this.router.navigateByUrl('/tools/json-formatter');
    } else {
      console.warn('Unknown command:', command);
    }
  }
}