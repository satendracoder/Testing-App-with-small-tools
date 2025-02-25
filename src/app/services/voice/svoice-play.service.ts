import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvoicePlayService {
  private language: 'en' | 'hi' = 'en'; // Default English

  constructor() {}

  // 🟢 Function to toggle language
  toggleLanguage() {
    this.language = this.language === 'en' ? 'hi' : 'en';
    console.log(`Language switched to: ${this.language}`);
  }

  // 🟢 Function to speak message in selected language
  speak(amount: number) {
    let message = this.language === 'en' 
      ? `Transaction successful of rupees ${amount}` 
      : `₹${amount} ka transaction safaltapurvak pura hua`;

    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = this.language === 'en' ? 'en-US' : 'hi-IN'; // Set language
    speech.rate = 1; // Speed
    speech.pitch = 1.2; // Pitch
    window.speechSynthesis.speak(speech);
  }

  // 🟢 Function to get current language
  getLanguage() {
    return this.language;
  }
}
