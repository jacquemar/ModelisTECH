import { Component, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from '../../layout/slider/slider.component';
import { AboutComponent } from '../../layout/about/about.component';
import { ServicesComponent } from '../../layout/service/service.component';
import { CommonModule } from '@angular/common'; // Ajoutez cette importation

interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-accueil',
  imports: [
    MatSliderModule,
    SliderComponent,
    AboutComponent,
    ServicesComponent,
    CommonModule // Ajoutez CommonModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  imgPath = '/images/page-bg/image_historique.png';
  imgFixed = '/images/page-bg/carriere.jpg';

  // Ajout de la liste des logos clients
  typeclients: ClientLogo[] = [
    { id: 1, name: 'Client 1', image: 'images/clients/cienergie.png' },
    { id: 2, name: 'Client 2', image: 'images/clients/comafrique.png' },
    { id: 3, name: 'Client 3', image: 'images/clients/mclu.png' },
    { id: 4, name: 'Client 4', image: 'images/clients/armoirie.png' },
    { id: 5, name: 'Client 5', image: 'images/clients/bani.png' },
  ];

}
