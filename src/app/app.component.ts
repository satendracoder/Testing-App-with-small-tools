import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MateriallistModule } from './shared/materiallist/materiallist.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MateriallistModule,RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-bot'

}

