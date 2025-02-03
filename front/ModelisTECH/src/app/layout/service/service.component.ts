import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

interface Service {
  id: number;
  libelle: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html'
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  imgBack: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices(): void {
    this.http.get<Service[]>(environment.apiUrl+'api/service')
      .subscribe({
        next: (data) => {

          this.services = data;
          console.log(this.services);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des données', err);
          this.services = this.getLocalServices();
        }
      });
  }

  // Méthode pour fournir des services locaux en cas d'échec de la récupération
  getLocalServices(): Service[] {
    return [
      {
        id: 1,
        libelle: 'DÉVELOPPEMENT DE LOGICIEL',
        description: 'Nous Développons des logiciels métiers et spécifiques pour tout type de clients. Nos logiciels utilisent à la foi les systèmes libres et propriétaires.',
        image: '/images/service/2.jpeg'
      },
      {
        id: 2,
        libelle: 'SYSTÈME D\'INFORMATION GÉOGRAPHIQUE',
        description: 'Solutions avancées de cartographie et d\'analyse géospatiale.',
        image: '/images/service/1.jpeg'
      },
      {
        id: 3,
        libelle: 'FORMATION',
        description: 'Programmes de formation personnalisés et adaptés à vos besoins.',
        image: 'images/service/3.png'
      },
      {
        id: 4,
        libelle: 'HÉBERGEMENT',
        description: 'Solutions d\'hébergement sécurisées et performantes.',
        image: 'images/service/4.png'
      },
      {
        id: 5,
        libelle: 'DEVELOPPEMENT',
        description: 'Services de développement sur mesure.',
        image: '/images/service/5.jpg'
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

  top(): void {
    window.scrollTo(0, 0);
  }
}
