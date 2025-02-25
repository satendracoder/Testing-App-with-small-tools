import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonFormatterService {
  formatJSON(jsonString: string): string {
    try {
      let parsedJSON = JSON.parse(jsonString);
      let formatted = JSON.stringify(parsedJSON, null, 4);
      return this.highlightJSON(formatted);
    } catch (error) {
      return '<span class="error">Invalid JSON</span>';
    }
  }

  private highlightJSON(json: string): string {
    return json
   // Special characters ko escape karna
   .replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   // Keys (properties)
   .replace(/"(.*?)":/g, '<span class="json-key">"$1"</span>:')
   // Empty string values pehle replace karein:
   .replace(/:\s*""/g, ': <span class="json-empty-string">""</span>')
   // Non-empty string values
   .replace(/:\s*"([^"]+)"/g, ': <span class="json-string">"$1"</span>')
   // Numbers
   .replace(/:\s*(\d+(\.\d+)?)/g, ': <span class="json-number">$1</span>')
   // Booleans
   .replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>')
   // null value
   .replace(/:\s*(null)/g, ': <span class="json-null">$1</span>')
   // undefined value (agar input mein manually diya gaya ho)
   .replace(/:\s*(undefined)/g, ': <span class="json-undefined">$1</span>')
   // Brackets (curly & square)
   .replace(/([{}\[\]])/g, '<span class="json-bracket">$1</span>');
  }
}
