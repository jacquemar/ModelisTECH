import { Component, NgModule, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from '../../layout/slider/slider.component';
import { AboutComponent } from '../../layout/about/about.component';
import { ServicesComponent } from '../../layout/service/service.component';
import {CommonModule, DatePipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { FooterComponent } from '../../layout/footer/footer.component';

interface ClientLogo {
  id: number;
  name: string;
  image: string;
}
interface Image {
  id: number;
  image: string;

}

interface PaysId {
  id: number;
  code: string;
  nom: string;
}

interface TypeClientId {
  id: number;
  image: string;
  description: string;
  dateCreation: string;
}

interface Realisation {
  dateCreation: string;
  dateDebut: string;
  dateFin: string | null;
  description: string;
  enCours: boolean;
  id: number;
  images: Image[];
  libelle: string;
  paysId: PaysId;
  resultat: string;
  typeclientId: TypeClientId;
}

@Component({
  selector: 'app-accueil',
  imports: [
    MatSliderModule,
    SliderComponent,
    AboutComponent,
    ServicesComponent,
    CommonModule,
    FooterComponent,
    HttpClientModule,
    DatePipe,
  ],
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})

export class AccueilComponent implements OnInit {
  imgPath = '/images/page-bg/image_historique.png';
  imgFixed = '/images/page-bg/carriere.jpg';
  realisations: Realisation[] = [];
  imgBack = environment.apiUrl;


  constructor(private http: HttpClient) {}

  fetchRealisations(): void {
    this.http.get<Realisation[]>(environment.apiUrl+'api/realisation')
      .subscribe({
        next: (data) => {
          this.realisations = data;
          console.log(this.realisations);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des données', err);
        }
      });
  }
  ngOnInit(): void {
    this.fetchRealisations();
  }

  typeclients: ClientLogo[] = [
    { id: 1, name: 'Client 1', image: 'images/clients/cienergie.png' },
    { id: 2, name: 'Client 2', image: 'images/clients/comafrique.png' },
    { id: 3, name: 'Client 3', image: 'images/clients/mclu.png' },
    { id: 4, name: 'Client 4', image: 'images/clients/armoirie.png' },
    { id: 5, name: 'Client 5', image: 'images/clients/bani.png' },
  ];

  scrollLeft(): void {
    const container = document.querySelector('.overflow-x-auto') as HTMLElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = document.querySelector('.overflow-x-auto') as HTMLElement;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
  top(): void {
    window.scrollTo(0, 0);
  }
}


