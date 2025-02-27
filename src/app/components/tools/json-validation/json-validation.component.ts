import { Component } from '@angular/core';
import { JsonValidaionService } from '../../../services/json-validation/json-validaion.service';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-json-validation',
  imports: [MateriallistModule],
  templateUrl: './json-validation.component.html',
  styleUrl: './json-validation.component.scss'
})
export class JsonValidationComponent {
  jsonInput: string = '';
  validationResult: string = '';

  constructor(private jsonValidationService: JsonValidaionService) {}

  validateJson() {
    const result = this.jsonValidationService.validateJson(this.jsonInput);
    this.validationResult = result.valid ? 'Valid JSON' : `Invalid JSON: ${result.error}`;
  }
}
