import { Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { BgImageCardComponent } from './components/bg-image-card/bg-image-card.component';
import { TablePageComponent } from './components/tables/table-page/table-page.component';
import { RewiteArticleComponent } from './components/TextAnalysisTools/rewite-article/rewite-article.component';

export const routes: Routes = [
  { path: '', redirectTo: '/chat-bot', pathMatch: 'full' },
  {
    path: 'chat-bot',
    component: ChatBotComponent,
    title: 'ASP API + WebSocket',
  },
  { path: 'bg', component: BgImageCardComponent, title: 'Background Remove' },
  { path: 'tables', component: TablePageComponent, title: 'Tables list' },
  { path: 'rewite', component: RewiteArticleComponent, title: 'Text Analysis' },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/form/template-form/template-form.component').then(
        (tem) => tem.TemplateFormComponent
      ),
    title: 'Template form Forms',
  },

  {
    path: 'rxjs',
    loadComponent: () =>
      import('./components/rxjs/rxjs/rxjs.component').then(
        (rxjs) => rxjs.RxjsComponent
      ),
    title: 'RxJS Some Questoin',
  },
];
