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

  {
    path: 'tools',
    loadComponent: () =>
      import('./components/tools/tools.component').then(
        (tools) => tools.ToolsComponent
      ),
    title: 'Tools',
    children: [
      {
        path: 'count_word',
        loadComponent: () =>
          import('./components/wordCount/word-count-result/word-count-result.component').then(
            (count) => count.WordCountResultComponent
          ),
          title:"Count Word"
      },

      {
        path: 'bg',
        loadComponent: () =>
          import('./components/bg-image-card/bg-image-card.component').then(
            (bg) => bg.BgImageCardComponent
          ),
          title:"Background Remove"
      },

      {
        path: 'qe_code',
        loadComponent: () =>
          import('./components/tools/qr-code/qr-code.component').then(
            (qr) => qr.QRCodeComponent
          ),
          title:"Generate and Export QR"
      },

      {
        path: 'grammar_checker',
        loadComponent: () =>
          import('./components/tools/grammar-checker/grammar-checker.component').then(
            (grammar) => grammar.GrammarCheckerComponent
          ),
          title:"Free Grammar Checker"
      },

      {
        path: 'crop_image',
        loadComponent: () =>
          import('./components/tools/crop-image/crop-image.component').then(
            (crop) => crop.CropImageComponent
          ),
          title:"Free Crop image"
      },

      {
        path: 'new_qr',
        loadComponent: () =>
          import('./components/tools/new-qr/new-qr.component').then(
            (newqr) => newqr.NewQrComponent
          ),
          title:"Free new_qr"
      },

      
      {
        path: 'pdf',
        loadComponent: () =>
          import('./components/tools/pdf-design/pdf-design.component').then(
            (pdf) => pdf.PdfDesignComponent
          ),
          title:"Free Generate PDF"
      },

      {
        path: 'voice',
        loadComponent: () =>
          import('./components/tools/voice-tools/voice-tools.component').then(
            (voice) => voice.VoiceToolsComponent
          ),
          title:"Voice Tools"
      },
    ],
  },
];
