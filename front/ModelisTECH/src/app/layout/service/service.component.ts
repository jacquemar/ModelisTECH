import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html'
})
export class ServicesComponent implements OnInit {
  services: any[] | undefined;
  imgBack: string = environment.apiUrl + '/public/images/service/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices(): void {
    this.http.get<any[]>('api/service')
      .subscribe({
        next: (data) => {
          console.log(this.services);
          this.services = data;

        },
        error: (err) => {
          console.error('Erreur lors de la récupération des données', err);
          // Utilisation des données locales comme fallback
          this.services = this.getLocalServices();
        }
      });
  }

  // Méthode pour fournir des services locaux en cas d'échec de la récupération
  getLocalServices(): Service[] {
    return [
      {
        id: 1,
        title: 'DÉVELOPPEMENT DE LOGICIEL',
        description: 'Nous Développons des logiciels métiers et spécifiques pour tout type de clients. Nos logiciels utilisent à la foi les systèmes libres et propriétaires.',
        imageUrl: '/images/service/2.jpeg'
      },
      {
        id: 2,
        title: 'SYSTÈME D\'INFORMATION GÉOGRAPHIQUE',
        description: 'Solutions avancées de cartographie et d\'analyse géospatiale.',
        imageUrl: '/images/service/1.jpeg'
      },
      {
        id: 3,
        title: 'FORMATION',
        description: 'Programmes de formation personnalisés et adaptés à vos besoins.',
        imageUrl: 'images/service/3.png'
      },
      {
        id: 4,
        title: 'HÉBERGEMENT',
        description: 'Solutions d\'hébergement sécurisées et performantes.',
        imageUrl: 'images/service/4.png'
      },
      {
        id: 5,
        title: 'DEVELOPPEMENT',
        description: 'Services de développement sur mesure.',
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

  top(): void {
    window.scrollTo(0, 0);
  }
}
