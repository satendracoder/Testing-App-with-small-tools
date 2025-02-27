import { Component, ViewEncapsulation } from '@angular/core';
import { JsonComparisonService } from '../../../../services/json-comparison/json-comparison.service';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-json-comparison',
  imports: [MateriallistModule],
  templateUrl: './json-comparison.component.html',
  styleUrl: './json-comparison.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class JsonComparisonComponent {
  jsonInput1: string = `{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "address": { 
    "city": "New York", 
    "zip": "10001" 
    }
  }`;

  jsonInput2: string = `{
    "name": "John",
    "age": 25,
    "isStudent": true,
    "address": { 
    "city": "Los Angeles", 
    "zip": "90001" 
    },
    "phone": "123-456-7890"
  }`;

  formattedComparison: string = '';

  constructor(private jsonCompareService: JsonComparisonService) {}

  compareJSON() {
    this.formattedComparison = this.jsonCompareService.compareJSON(this.jsonInput1, this.jsonInput2);
  }
}
