import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environment/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarriereController {
  constructor(private http: HttpClient) {}
  BASE_API_URL = environment.apiUrl;

  list(): Observable<any> {
    return this.http.get<any>(this.BASE_API_URL + 'api/offre',{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
