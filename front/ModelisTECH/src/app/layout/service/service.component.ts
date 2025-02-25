import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { RouterLink, Router } from '@angular/router';
import { ServiceController } from '../../services/controller/service.controller';
import { DotLottie } from '@lottiefiles/dotlottie-web';

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
export class ServicesComponent implements OnInit, AfterViewInit {
  services: Service[] = [];
  imgBack: string = environment.apiUrl;
  basePath = '';
  collecter = 'images/service/collecter.svg';
  traiter = 'images/service/traiter.png';
  diffuser = 'images/service/diffuser.svg';
  construire = 'images/service/construire.svg';
  dotLottieCollecter: DotLottie | undefined;
  dotLottieTraiter: DotLottie | undefined;

  dotLottie: DotLottie | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private serviceController: ServiceController
  ) {}

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

  ngAfterViewInit(): void {
    // Première animation (Collecter)
    setTimeout(() => {
      const canvasCollecter = document.querySelector('#collecter-canvas');
      if (canvasCollecter) {
        this.dotLottieCollecter = new DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvasCollecter as HTMLCanvasElement,
          src: "https://lottie.host/ef858f9b-ea26-4c20-80b4-3786fdc20e21/MqGRaSJr8m.lottie",
        });
      }
    }, 0);



    // Deuxième animation (Traiter)
    setTimeout(() => {
      const canvasTraiter = document.querySelector('#traiter-canvas');
      if (canvasTraiter) {
        this.dotLottieTraiter = new DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvasTraiter as HTMLCanvasElement,
          src: "https://lottie.host/0dcd76ae-6f54-45b5-a71e-70ff4186f154/TUzoFYD61V.lottie",
        });
      }
    }, 0);
  }

  reset() {
    localStorage.removeItem("serviceId");
    localStorage.removeItem("retourne");
  }

  detail(serviceId: number) {
    this.reset();
    localStorage.setItem("serviceId", serviceId.toString());
    this.router.navigate(['services-details']);
    localStorage.setItem("retourne", "1");
  }

  scrollLeft(): void {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  top(): void {
    window.scrollTo(0, 0);
  }
}
