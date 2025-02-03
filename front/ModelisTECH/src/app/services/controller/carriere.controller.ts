import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CarriereController {
  constructor(private http: HttpClient) {}
  BASE_API_URL = environment;

  list() {
    let body = new URLSearchParams();
    return this.http.post(this.BASE_API_URL + 'carriere/',
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }




}
