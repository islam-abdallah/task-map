import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url: string;
  public data =  {
    latitude: "30.044482654785146",
    longitude: "31.235799312591553",
    type: "clinics",
    lang: "en"
  }
  constructor(private http: HttpClient) {

    this.url = environment.api;
  }

  getMarkers(data) {
    return this.http.get(this.url + 'places?' , {params : data})
      .pipe(
        catchError((error: any) => {
          return Observable.throw(error.error || 'error ');
        }))

  }
}
