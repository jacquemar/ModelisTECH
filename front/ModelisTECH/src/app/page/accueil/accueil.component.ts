import { Component, NgModule, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from '../../layout/slider/slider.component';
import { AboutComponent } from '../../layout/about/about.component';
import { ServicesComponent } from '../../layout/service/service.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { FooterComponent } from '../../layout/footer/footer.component';

interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

interface Realisation {
  id: number;
  titre: string;
  description: string;
  pays: string;
  duree: string;
  resultats: string;

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
          this.realisations = this.getLocalRealisations();  // Correction ici
        }
      });
  }
  ngOnInit(): void {
    this.fetchRealisations();
  }
  getLocalRealisations(): Realisation[] {
    return [
      {
        id: 1,
        titre: 'DÉVELOPPEMENT DE LOGICIEL',
        description: 'Nous Développons des logiciels métiers et spécifiques pour tout type de clients. Nos logiciels utilisent à la fois les systèmes libres et propriétaires.',
        pays: 'France',
        duree: '12 mois',
        resultats: 'Amélioration de la productivité',

      },
    ];
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
