import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environment/environment';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './service.component.html'
})
export class ServicesComponent implements OnInit {
  services: any[] | null = null;
  //serviceInfo: any = null;
  imgBack: string = environment.apiUrl + '/public/images/service/';

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    // Initialisation des données
    this.initializeServices();
  }

  initializeServices(): void {
    this.services = [
      {
        id: 1,
        title: 'DÉVELOPPEMENT DE LOGICIEL',
        description: 'Nous Développons des logiciels métiers et spécifiques pour tout type de clients. Nos logiciels utilisent à la fois les systèmes libres et propriétaires. Domaines de Développement des logiciels :',
        imageUrl:'/images/service/2.jpeg'
      },
      {
        id: 2,
        title: 'SYSTÈME D\'INFORMATION GÉOGRAPHIQUE',
        description: 'Description du service 2 mettant en valeur ses caractéristiques uniques.',
        imageUrl: '/images/service/1.jpeg'
      },
      {
        id: 3,
        title: 'FORMATION',
        description: 'Présentation des avantages et de la valeur ajoutée du service .',
        imageUrl: 'images/service/3.png'
      },
      {
        id: 4,
        title: 'HÉBERGEMENT',
        description: 'Présentation des avantages et de la valeur ajoutée du service 4.',
        imageUrl: 'images/service/4.png'
      },
      {
        id: 5,
        title: 'DEVELOPPEMENT',
        description: 'Présentation des avantages et de la valeur ajoutée du service 5.',
        imageUrl: '/images/service/5.jpg'
      }
    ];
  }

  scrollLeft(): void {
    const container = document.querySelector('.overflow-x-auto') as HTMLElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = document.querySelector('.overflow-x-auto') as HTMLElement;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }


  //fetchServices(): void {
    //this.http.get<any[]>(environment.apiUrl+'/api/service')
     // .subscribe({
       // next: (data) => {
         // this.services = data;
        //},
        //error: (err) => {
          //console.error('erreur lors de la récupération des données', err);
        //}
      //});
//  }

  //detailService(id: number): void {
    // Navigation vers le détail du service
  //}

  top(): void {
    window.scrollTo(0, 0);
  }
}
