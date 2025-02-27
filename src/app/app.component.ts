import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MateriallistModule } from './shared/materiallist/materiallist.module';
import { VoiceTakeService } from './services/voice-take/voice-take.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MateriallistModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isLoading = false; // Loader initially hidden

  title = 'chat-bot mujhe nhi '
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

    constructor(public speechService: VoiceTakeService) {}
  categories = [
    { name: 'Shopping', icon: 'bi bi-bag', color: '#d6e4ff', iconBgColor: '#91b5f2' },
    { name: 'Entertainment', icon: 'bi bi-film', color: '#e4e4e4', iconBgColor: '#bdbdbd' },
    { name: 'Tools', icon: 'bi bi-tools', color: '#bfe3ff', iconBgColor: '#63a8e1' },
    { name: 'Art & Design', icon: 'bi bi-pencil', color: '#c6efce', iconBgColor: '#69c370' },
    { name: 'Education', icon: 'bi bi-book', color: '#ffecb3', iconBgColor: '#ffc107' },
    { name: 'Health', icon: 'bi bi-heart', color: '#f4cccc', iconBgColor: '#e06666' },
    { name: 'Shopping', icon: 'bi bi-bag', color: '#d6e4ff', iconBgColor: '#91b5f2' },
    { name: 'Entertainment', icon: 'bi bi-film', color: '#e4e4e4', iconBgColor: '#bdbdbd' },
    { name: 'Tools', icon: 'bi bi-tools', color: '#bfe3ff', iconBgColor: '#63a8e1' },
    { name: 'Art & Design', icon: 'bi bi-pencil', color: '#c6efce', iconBgColor: '#69c370' },
    { name: 'Education', icon: 'bi bi-book', color: '#ffecb3', iconBgColor: '#ffc107' },
    { name: 'Great Help', icon: 'bi bi-heart', color: '#f4cccc', iconBgColor: '#e06666' }
  ];

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.scrollLeft = 0;
  }

  scroll(direction: string) {
    if (!this.scrollContainer) return;
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault(); // Prevent browser's default save behavior
      this.showLoader();
    }
  }

  showLoader() {
    this.isLoading = true; // Show loader
    console.log('Loading started...');
    this.myShortcutMethod();
    // Simulate some async operation (like API call)
    setTimeout(() => {
      this.isLoading = false; // Hide loader after 3 seconds
      console.log('Loading finished!');
    }, 3000);
  }

  myShortcutMethod() {
    console.log('Shortcut triggered: Ctrl + S');
    this. startVoiceCommand();
  }

   // 🟢 Start Listening
   startVoiceCommand() {
    this.speechService.startListening();
  }



  // 🔴 Stop Listening
  stopVoiceCommand() {
    this.speechService.stopListening();
  }

}