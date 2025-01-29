import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rewite-article',
  imports: [MateriallistModule],
  templateUrl: './rewite-article.component.html',
  styleUrl: './rewite-article.component.scss'
})
export class RewiteArticleComponent {
  article: string = '';
  rewrittenArticle: string | null = null;
  isProcessing: boolean = false;

  constructor(private http: HttpClient) {}

  processArticle() {
    if (!this.article.trim()) return alert('Please paste an article.');
    this.isProcessing = true;
    this.rewrittenArticle = null;
    debugger
    this.http.post<{ rewritten: string }>('http://localhost:3000/api/rewrite', { article: this.article }).subscribe(
      (response) => {
        debugger
        this.rewrittenArticle = response.rewritten;
        this.isProcessing = false;
      },
      (error) => {
        console.error(error);
        this.isProcessing = false;
        alert('Error processing the article.');
      }
    );
  }
}
