import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-word-count-result',
  imports: [MateriallistModule],
  templateUrl: './word-count-result.component.html',
  styleUrl: './word-count-result.component.scss'
})
export class WordCountResultComponent {

  userInput: string = '';
  isProcessing: boolean = false;
  stats: any = null;

  countWords() {
    // Simulate processing time
    this.isProcessing = true;
    this.stats = null;

    setTimeout(() => {
      const words = this.userInput.trim().split(/\s+/);
      const charCountWithSpaces = this.userInput.length;
      const charCountWithoutSpaces = this.userInput.replace(/\s/g, '').length;
      const sentences = this.userInput.split(/[.!?]/).filter(Boolean);

      this.stats = {
        wordCount: words.length,
        charCountWithSpaces,
        charCountWithoutSpaces,
        sentenceCount: sentences.length,
        topWords: this.getTopWords(words)
      };
      this.isProcessing = false;
    }, 2000); // Simulating 2 seconds of processing
  }

  getTopWords(words: string[]) {
    const wordFrequency: { [key: string]: number } = {};
    words.forEach((word) => {
      const cleanedWord = word.toLowerCase().replace(/[^\w]/g, '');
      if (cleanedWord) {
        wordFrequency[cleanedWord] = (wordFrequency[cleanedWord] || 0) + 1;
      }
    });

    return Object.entries(wordFrequency)
      .map(([text, count]) => ({ text, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }

  // Placeholder for grammar checking
  checkGrammar() {
    alert('Grammar checking functionality is not implemented yet!');
  }
}
