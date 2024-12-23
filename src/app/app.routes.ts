import { Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { BgImageCardComponent } from './components/bg-image-card/bg-image-card.component';

export const routes: Routes = [
    { path: '', redirectTo: '/chat-bot', pathMatch: 'full' },
    { path: 'chat-bot', component: ChatBotComponent, title: "ASP API + WebSocket" },
    { path: 'bg', component: BgImageCardComponent, title: "Background Remove" }
];
