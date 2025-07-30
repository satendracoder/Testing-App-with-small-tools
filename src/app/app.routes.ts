import { Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { BgImageCardComponent } from './components/bg-image-card/bg-image-card.component';
import { TablePageComponent } from './components/tables/table-page/table-page.component';
import { RewiteArticleComponent } from './components/TextAnalysisTools/rewite-article/rewite-article.component';
import { JsonFormatterComponent } from './components/tools/json-formatter/json-formatter.component';
import { JsonComparisonComponent } from './components/tools/json-comparison/json-comparison/json-comparison.component';
import { VoiceTakeComponent } from './components/tools/voice-take/voice-take.component';
import { VoiceToolsComponent } from './components/tools/voice-tools/voice-tools.component';
import { profile } from 'console';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { EditorTextComponent } from './editor/editor-text/editor-text.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component:ProfilePageComponent, title: 'Home'},
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
        component:BgImageCardComponent,
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
        component:VoiceToolsComponent,
          title:"Voice Tools"
      },

      {
        path: 'json-formatter',
        component: JsonFormatterComponent,
          title:"Json-Formatter"
      },

      {
        path: 'json-compare',
        component: JsonComparisonComponent,
          title:"Json-compare"
      },

      {
        path: 'voice-take',
        component: VoiceTakeComponent,
          title:"Voice-Take"
      },
    ],
  },

  {path:'editor_text', component:EditorTextComponent, title:"Editor Text"}
];
