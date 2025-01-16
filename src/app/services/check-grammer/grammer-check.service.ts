import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrammerCheckService {

  private apiUrl = 'https://grammarbot-neural.p.rapidapi.com/v1/check';
  private apiKey = '8fce5baab7msh85fd0cc10c61835p155391jsn3d17fb385c7a';

  constructor(private http: HttpClient) {}

  checkGrammar(text: string, lang: string = 'en'): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'grammarbot-neural.p.rapidapi.com',
      'Content-Type': 'application/json',
    });

    const body = {
      text: text,
      lang: lang,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}