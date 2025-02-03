import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

interface Image {
  image: string;
}

interface TypeClient {
  id: number;
  image: string;
  description: string;
  dateCreation: string;
}

interface Pays {
  id: number;
  code: string;
  nom: string;
}

export interface Realisation {
  id: number;
  typeclientId: TypeClient;
  paysId: Pays;
  libelle: string;
  description: string;
  dateDebut: string;
  dateFin: string | null;
  images: Image[];
  enCours: boolean;
  resultat: string;
  dateCreation: string;
  activeTab: 'description' | 'client' | 'pays' | 'duree' | 'resultat';
}

@Injectable({
  providedIn: 'root',
})
export class RealisationController {
  constructor(private http: HttpClient) {}

  private readonly BASE_API_URL = environment.apiUrl;
  private readonly API_PATH = 'api/realisation';

  listAll(): Observable<Realisation[]> {
    return this.http.get<Realisation[]>(`${this.BASE_API_URL}${this.API_PATH}/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  listWithLimit(limit: number): Observable<Realisation[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<Realisation[]>(`${this.BASE_API_URL}${this.API_PATH}`, {
      params,
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  detail(realisationId: string): Observable<Realisation> {
    const params = new HttpParams().set('realisationid', realisationId);
    return this.http.get<Realisation>(`${this.BASE_API_URL}${this.API_PATH}/detail`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params
    });
  }

}
