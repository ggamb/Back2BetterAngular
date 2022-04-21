import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class TrainLocationService {

  constructor(
    private http: HttpClient,
  ) { }


  private apiKey = environment.apiKey;

  private metroHeroMetrics = `https://dcmetrohero.com/api/v1/metrorail/metrics`;

  private metroHeroRed = `https://dcmetrohero.com/api/v1/metrorail/metrics`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, X-Requested-With',
      'apiKey' : this.apiKey
    })

  };

  getGeneralInfo() : Observable<any> {
    return this.http.get(this.metroHeroMetrics, {headers: this.httpOptions.headers});
  }

  getRedLineTrains()  : Observable<any> {
    return this.http.get(this.metroHeroRed, {headers: this.httpOptions.headers});
    
  }
}
