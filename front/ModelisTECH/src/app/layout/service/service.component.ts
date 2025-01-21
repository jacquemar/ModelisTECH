import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environment/environment';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  services: any[] | null = null;
  //serviceInfo: any = null;
  imgBack: string = environment.apiUrl + '/public/images/service/';

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    // Initialisation des données
    this.fetchServices();
  }

  fetchServices(): void {
    this.http.get<any[]>(environment.apiUrl + '/service')
      .subscribe({
        next: (data) => {
          this.services = data;
        },
        error: (err) => {
          console.error('erreur lors de la récupération des données', err);
        }
      });
  }

  //detailService(id: number): void {
    // Navigation vers le détail du service
  //}

  top(): void {
    window.scrollTo(0, 0);
  }
}
