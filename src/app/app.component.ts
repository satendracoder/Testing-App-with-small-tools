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
  title = 'chat-bot mujhe nhi '

  categories = [
    { name: 'Shopping', icon: 'bi bi-bag', color: '#d6e4ff', iconBgColor: '#91b5f2' },
    { name: 'Entertainment', icon: 'bi bi-film', color: '#e4e4e4', iconBgColor: '#bdbdbd' },
    { name: 'Tools', icon: 'bi bi-tools', color: '#bfe3ff', iconBgColor: '#63a8e1' },
    { name: 'Art & Design', icon: 'bi bi-pencil', color: '#c6efce', iconBgColor: '#69c370' }
  ];
}

