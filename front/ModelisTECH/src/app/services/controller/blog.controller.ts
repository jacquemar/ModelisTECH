import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

export interface Blog {
  id: number;
  utilisateurId: UtilisateurId;
  libelle: string;
  description: string;
  image: [];
  dateCreation: string
}
interface UtilisateurId {
  id: number;
  personneId: PersonneId;
  email: string;
  motDePasse: string;
  dateCreation: string;
  roles: string;
}
interface PersonneId {
  id: number;
  profilId: number;
  PaysResidence: string,
  nationnalite: string;
  nom: string;
  prenom: string;
  linkedin: string;
  sexe: string;
  email: string;
  tel: number;
  adresse:string;
  image: [];
  dateNaissance: number;
  dateCreation: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogController {
  constructor(private http: HttpClient) {}

  private readonly BASE_API_URL = environment.apiUrl;
  private readonly API_PATH = 'api/blog';

  listAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.BASE_API_URL}${this.API_PATH}/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
