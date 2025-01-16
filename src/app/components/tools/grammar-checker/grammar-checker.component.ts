import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { trigger, transition, style, animate } from '@angular/animations';
import { GrammerCheckService } from '../../../services/check-grammer/grammer-check.service';

@Component({
  selector: 'app-grammar-checker',
  imports: [MateriallistModule],
  templateUrl: './grammar-checker.component.html',
  styleUrl: './grammar-checker.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class GrammarCheckerComponent {

  inputText: string = '';
  results: any = null;
  isProcessing: boolean = false;

  constructor(private grammarService: GrammerCheckService) {}

  checkGrammar() {
    if (!this.inputText.trim()) {
      alert('Please enter some text to check.');
      return;
    }
    this.isProcessing = true;
    this.grammarService.checkGrammar(this.inputText).subscribe(
      (response) => {
        this.results = response;
        this.isProcessing = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isProcessing = false;
      }
    );
  }
}