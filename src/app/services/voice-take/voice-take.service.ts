import { Injectable, NgZone } from '@angular/core';
import { SvoicePlayService } from '../voice/svoice-play.service';
import { Router } from '@angular/router';

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

  constructor(private Voice_api: SvoicePlayService,private zone: NgZone, private router: Router) {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false; // Ek baar me ek command le
      this.recognition.lang = 'en-US'; // Default language (Hindi ke liye 'hi-IN' karein)
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      // 🟢 Jab voice input mile
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

      // 🔴 Jab stop ho
      this.recognition.onend = () => {
        console.log('Speech Recognition Ended');
        this.isListening = false;
      };
    } else {
      console.warn('Speech Recognition Not Supported');
    }
  }

  // 🟢 Start Listening
  startListening() {
    if (this.recognition) {
      this.isListening = true;
      this.recognition.start();
    }
  }

  // 🟢 Stop Listening
  stopListening() {
    if (this.recognition) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // 🟢 Process Voice Commands
  // processCommand(command: string) {
  //   if (command.includes('pay 500')) {
  //     // alert('Paying ₹500');
  //     this.Voice_api.speak(500);
  //   } else if (command.includes('pay 1000')) {
  //     // alert('Paying ₹1000');
  //     this.Voice_api.speak(1000)
  //   } else if (command.includes('change language to hindi')) {
  //     this.recognition.lang = 'hi-IN';
  //     alert('Language changed to Hindi');
  //   } else if (command.includes('change language to english')) {
  //     this.recognition.lang = 'en-US';
  //     alert('Language changed to English');
  //   } else {
  //     alert('Unknown command: ' + command);
  //   }
  // }




  // 🟢 Process Voice Commands
  processCommand(command: string) {
    if (command.includes("aadhaar") || command.includes("eps") || command.includes("apes") 
      || command.includes("paise nikalna") || command.includes("banking") || command.includes("bank service")) {
      this.router.navigate(['/tools/new_qr']); // APES route par jao
      //alert('Navigating to APES');
    } else if (command.includes('home')) {
      this.router.navigate(['/']); // Home route par jao
      //alert('Navigating to Home');
    } else if (command.includes('profile')) {
      this.router.navigateByUrl('/tools/json-compare'); // Profile page par jao
      //alert('Navigating to Profile');
    } else {
      //alert('Unknown command: ' + command);
    }
  }
}