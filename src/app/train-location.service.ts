import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainLocationService {

  constructor(
    private http: HttpClient,
  ) { }


  private apiKey = environment.apiKey;

  private metroHeroURL = `https://dcmetrohero.com/api/v1/metrorail/metrics`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, X-Requested-With',
      'apiKey' : this.apiKey
    })

  };

  getRedLineTrains() {
    
    return this.http.get(this.metroHeroURL, {headers: this.httpOptions.headers});
  }
}
