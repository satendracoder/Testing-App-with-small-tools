import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SmantraDeviceService {

  private primaryUrl: string = 'http://127.0.0.1:';
  private oldPort: boolean = true;

  constructor(private http: HttpClient) {}

  discoverAvdm(): Observable<string | null> {
    let protocol = window.location.href;
    if (protocol.indexOf('https') >= 0) {
      this.primaryUrl = 'https://127.0.0.1:';
    }

    let ports = Array.from({ length: 21 }, (_, i) => 11100 + i);
    if (this.primaryUrl === 'https://127.0.0.1:' && this.oldPort) {
      ports = [8005, ...ports];
    }

    return new Observable(observer => {
      const tryNextPort = async (index: number) => {
        if (index >= ports.length) {
          observer.next(null);
          observer.complete();
          return;
        }

        let port = ports[index];
        let url = `${this.primaryUrl}${port}`;

        this.http.get(url, { responseType: 'text' }).pipe(
          catchError(() => of(null))
        ).subscribe(response => {
          if (response) {
            observer.next(url);
            observer.complete();
          } else {
            tryNextPort(index + 1);
          }
        });
      };

      tryNextPort(0);
    });
  }
}

