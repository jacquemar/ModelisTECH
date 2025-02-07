import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactController {
  constructor(private http: HttpClient) {}

  private readonly BASE_API_URL = environment.apiUrl;
  private readonly API_PATH = 'api/contact';
  private readonly codePays= environment.codePays;

  listAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_API_URL}${this.API_PATH}/${this.codePays}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
