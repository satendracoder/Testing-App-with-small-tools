import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonValidaionService {

  validateJson(jsonString: string): { valid: boolean, error?: string } {
    try {
      JSON.parse(jsonString);
      return { valid: true };
    } catch (error: any) {
      return { valid: false, error: error.message };
    }
  }
}
