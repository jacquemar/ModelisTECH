import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environment/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceController {
  constructor(private http: HttpClient) {}
  BASE_API_URL = environment.apiUrl;
  codePays= environment.codePays;

  list(): Observable<any> {
    return this.http.get<any>(this.BASE_API_URL + `api/service/`,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  detail(serviceId:any) {
    let body = new URLSearchParams();
    body.set('serviceId', serviceId);
    return this.http.post(this.BASE_API_URL + 'services-details/',
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

}
