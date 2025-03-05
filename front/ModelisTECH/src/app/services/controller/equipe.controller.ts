import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

interface Pays {
  id: number;
  code: string;
  nom: string;
}

interface Site {
  id: number;
  code: string;
  nom: string;
}

interface Personne {
  adresse: string;
  dateCreation: string;
  email: string;
  id: number;
  image: string;
  nationalite: string;
  nom: string;
  paysId: Pays;
  paysResidence: string;
  prenom: string;
  sexe: string;
  siteId: Site;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipeController {
  private apiUrl = environment.apiUrl;
  private codePays = environment.codePays;

  constructor(private http: HttpClient) {}

  /**
   * Récupère la liste des membres du personnel
   * @returns Observable<Personne[]>
   */
  getPersonnel(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.apiUrl}api/personnelle/`);
  }

  /**
   * Récupère un membre du personnel par son ID
   * @param id L'ID du membre
   * @returns Observable<Personne>
   */
  getPersonnelById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}api/personnelle/${id}`);
  }
}
