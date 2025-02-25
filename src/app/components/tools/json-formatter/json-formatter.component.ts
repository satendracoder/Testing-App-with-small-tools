import { Component, ViewEncapsulation } from '@angular/core';
import { JsonFormatterService } from '../../../services/json/json-formatter.service';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-json-formatter',
  imports: [MateriallistModule],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.scss',
  encapsulation: ViewEncapsulation.None // ✅ Fix for CSS not applying
})
export class JsonFormatterComponent {
// Sample JSON input. Dhyaan rahe: "undefined" JSON ke liye valid nahi hai.
jsonInput: string = `{"name": "John","age": 30,"isStudent": false,"data": null,"note": "","status": "undefined"}`;
  formattedJson: SafeHtml = '';

  constructor(private jsonFormatter: JsonFormatterService, private sanitizer: DomSanitizer) {}

  beautify() {
    const formatted = this.jsonFormatter.formatJSON(this.jsonInput);
    this.formattedJson = this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
