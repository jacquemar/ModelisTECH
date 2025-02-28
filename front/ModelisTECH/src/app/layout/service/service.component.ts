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
  backgroundImage: string = '/images/services/traiter.jpg';

  dotLottieCollecter: DotLottie | undefined;
  dotLottieTraiter: DotLottie | undefined;
  dotLottieDiffuser: DotLottie | undefined;
  dotLottieConstruire: DotLottie | undefined;

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
          src: "https://lottie.host/f2d5c661-2e5b-4dbc-90da-4bcf070c2387/ShBLt5ZtfF.lottie",
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
          src: "https://lottie.host/27558cf3-38d0-4b58-96da-8de290e2a3b7/ZgFAxYzCZp.lottie",
        });
      }
    }, 0);

    // Troisièm animation (Diffuser)
    setTimeout(() => {
      const canvasDiffuser = document.querySelector('#diffuser-canvas');
      if (canvasDiffuser) {
        this.dotLottieTraiter = new DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvasDiffuser as HTMLCanvasElement,
          src: "https://lottie.host/3d5dc160-3696-42b0-b2f3-1956fb57d37c/AYEidzPnM9.lottie",
        });
      }
    }, 0);

    // derniere animation (Construire)
    setTimeout(() => {
      const canvasConstruire = document.querySelector('#construire-canvas');
      if (canvasConstruire) {
        this.dotLottieTraiter = new DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvasConstruire as HTMLCanvasElement,
          src: "https://lottie.host/27558cf3-38d0-4b58-96da-8de290e2a3b7/ZgFAxYzCZp.lottie",
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
