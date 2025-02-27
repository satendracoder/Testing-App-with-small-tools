import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonComparisonService {

  compareJSON(json1: string, json2: string): string {
    try {
      const obj1 = JSON.parse(json1);
      const obj2 = JSON.parse(json2);
      return this.highlightDifferences(obj1, obj2);
    } catch (error) {
      return `<span style="color:red;">Invalid JSON</span>`;
    }
  }

  private highlightDifferences(obj1: any, obj2: any): string {
    let result = '';

    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    for (const key of allKeys) {
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (!(key in obj1)) {
        result += `<span class="json-added">+ "${key}": ${this.formatValue(val2)}</span>\n`;
      } else if (!(key in obj2)) {
        result += `<span class="json-removed">- "${key}": ${this.formatValue(val1)}</span>\n`;
      } else if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        result += `<span class="json-changed">~ "${key}": ${this.formatValue(val1)} → ${this.formatValue(val2)}</span>\n`;
      } else {
        result += `<span class="json-key">"${key}"</span>: ${this.formatValue(val1)}\n`;
      }
    }
    return `<pre>${result}</pre>`;
  }

  private formatValue(value: any): string {
    if (typeof value === 'string') return `<span class="json-string">"${value}"</span>`;
    if (typeof value === 'number') return `<span class="json-number">${value}</span>`;
    if (typeof value === 'boolean') return `<span class="json-boolean">${value}</span>`;
    if (value === null) return `<span class="json-null">null</span>`;
    if (typeof value === 'undefined') return `<span class="json-undefined">undefined</span>`;
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return `<span class="json-key">${value}</span>`;
  }
}
