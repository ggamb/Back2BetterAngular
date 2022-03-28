import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainLocationService {

  constructor(
    private http: HttpClient,
  ) { }

  private metroHero = 'https://dcmetrohero.com/api/v1/';

  private apiKey = process.env.APIKEY;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
