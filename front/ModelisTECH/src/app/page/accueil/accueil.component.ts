import { Component, NgModule, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from '../../layout/slider/slider.component';
import { AboutComponent } from '../../layout/about/about.component';
import { ServicesComponent } from '../../layout/service/service.component';
import {CommonModule, DatePipe} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { FooterComponent } from '../../layout/footer/footer.component';
import { EquipeContentComponent } from '../../layout/equipe-content/equipe-content.component';
import { EquipeController } from '../../services/controller/equipe.controller';
import { RouterLink } from '@angular/router';
import { RealisationController, Realisation } from '../../services/controller/realisation.controller';

interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

interface Site {
  id: number;
  code: string;
  nom: string;
}

interface Client {
  id: number;
  siteId: Site;
  image: string;
  description: string;
  dateCreation: string;
}

interface Image {
  image: string;
}

@Component({
  selector: 'app-accueil',
  imports: [
    MatSliderModule,
    SliderComponent,
    AboutComponent,
    ServicesComponent,
    CommonModule,
    EquipeContentComponent,
    FooterComponent,
    RouterLink
  ],
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})

export class AccueilComponent implements OnInit {
  imgPath = '/images/page-bg/image_historique.png';
  imgFixed = '/images/page-bg/carriere.jpg';
  realisations: Realisation[] = [];
  imgBack: string = environment.apiUrl;
  membres: any[] = [];

  constructor(
    private equipeController: EquipeController,
    private realisationController: RealisationController
  ) {}

  fetchRealisations(): void {
    this.realisationController.listAll().subscribe({
      next: (data) => {
        this.realisations = data;
        console.log('Réalisations:', this.realisations);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des réalisations:', error);
      }
    });
  }

  fetchEquipe(): void {
    this.equipeController.getPersonnel().subscribe({
      next: (data) => {
        this.membres = data;
        console.log('Membres de l\'équipe:', this.membres);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des membres de l\'équipe:', err);
      }
    });
  }

  ngOnInit(): void {
    this.fetchRealisations();
    this.fetchEquipe();
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


