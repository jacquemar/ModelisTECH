import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import {RouterLink, Router} from '@angular/router';
import {ServiceController} from '../../services/controller/service.controller';

interface Service {
  id: number;
  libelle: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service.component.html'
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  imgBack: string = environment.apiUrl;
  basePath= '';

  constructor(private http: HttpClient, private router: Router, private serviceController: ServiceController) {}

  ngOnInit(): void {
    this.serviceController.list().subscribe({
      next: (data) => {
        this.services = data;
        console.log(this.services);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données', err);

      }
    });
  }

  reset(){
    localStorage.removeItem("serviceId");
    localStorage.removeItem("retourne");
  }
  detail(serviceId:number){
    this.reset();
    // @ts-ignore
    localStorage.setItem("serviceId", serviceId);
    this.router.navigate(['services-details']);
    localStorage.setItem("retourne","1");
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
