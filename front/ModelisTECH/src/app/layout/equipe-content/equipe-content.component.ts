import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';

interface Personne {
  adresse: string;
  dateCreation: string;
  dateNaissance: string;
  email: string;
  id: number;
  image: string;
  linkedin: string | null;
  nationalite: string;
  nom: string;
  paysResidence: string;
  prenom: string;
  profil: {
    dateCreation: string;
    id: number;
    libelle: string;
  };
  sexe: string;
  tel: string;
}

interface Membre {
  dateCreation: string;
  description: string | null;
  id: number;
  libelle: string;
  personneid: Personne;
}

@Component({
  selector: 'app-equipe-content',
    imports: [
        NgForOf,
    ],
  standalone: true,
  templateUrl: './equipe-content.component.html',
  styleUrl: './equipe-content.component.css'
})
export class EquipeContentComponent implements OnInit{
  membres: Membre[] = [];
  imgBack: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchEquipe(): void {
    this.http.get<Membre[]>(environment.apiUrl + 'api/equipe')
      .subscribe({
        next: (data) => {
          this.membres = data;
          console.log(this.membres);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des données', err);
        }
      });
  }

  ngOnInit(): void {
    this.fetchEquipe();
  }
}
