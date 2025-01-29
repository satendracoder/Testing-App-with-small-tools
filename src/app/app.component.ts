import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SmantraDeviceService } from './services/mantra_device/smantra-device.service';
import { MateriallistModule } from './shared/materiallist/materiallist.module';

@Component({
  selector: 'app-root',
  imports: [MateriallistModule,RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-bot';

  discoveredUrl: string | null = null;

  constructor(private rdService: SmantraDeviceService) {}

  ngOnInit(): void {
    this.rdService.discoverAvdm().subscribe(url => {
      this.discoveredUrl = url;
    });
  }

}
