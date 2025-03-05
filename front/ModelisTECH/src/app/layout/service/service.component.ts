import { CommonModule } from '@angular/common';
import {Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
//import { RouterLink, Router } from '@angular/router';
import { ServiceController } from '../../services/controller/service.controller';
import { DotLottie } from '@lottiefiles/dotlottie-web';
import {gsap} from 'gsap';

interface Service {
  id: number;
  libelle: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './service.component.html'
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('servicesContainer', { static: false }) servicesContainer!: ElementRef;
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;

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
    //private router: Router,
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
    //this.initLottieAnimations();

    // Attendre que les éléments soient bien initialisés
    setTimeout(() => {
      this.setupServiceCardAnimations();
    }, 100);
  }

  initLottieAnimations(): void {
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
        this.dotLottieDiffuser = new DotLottie({
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
        this.dotLottieConstruire = new DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvasConstruire as HTMLCanvasElement,
          src: "https://lottie.host/27558cf3-38d0-4b58-96da-8de290e2a3b7/ZgFAxYzCZp.lottie",
        });
      }
    }, 0);
  }

  setupServiceCardAnimations(): void {
    // Sélection directe des cartes
    const cards = document.querySelectorAll('.service-card');

    if (cards.length === 0) {
      console.error('Aucune carte service trouvée');
      return;
    }

    cards.forEach((card: Element) => {

      const mainDiv = card.querySelector('div[class*="w-70"]');
      const overlay = card.querySelector('.absolute.inset-0');
      const canvas = card.querySelector('.canvas-container');

      // Logique mouseenter
      card.addEventListener('mouseenter', () => {
        console.log('Mouseenter sur:', card); // Debug

        gsap.to(mainDiv, {
          scale: 1.1,
          boxShadow: '0 0 80px black',
          duration: 0.3
        });

        gsap.to(overlay, {
          backgroundColor: 'rgba(0,0,0,0.4)',
          duration: 0.5
        });

        gsap.to(canvas, {
          scale: 0.8,
          duration: 0.5
        });
      });

      // Logique mouseleave
      card.addEventListener('mouseleave', () => {
        console.log('Mouseleave sur:', card); // Debug

        gsap.to(mainDiv, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.5
        });

        gsap.to(overlay, {
          backgroundColor: 'rgba(0,0,0,0)',
          duration: 0.5
        });

        gsap.to(canvas, {
          scale: 1,
          duration: 0.5
        });
      });
    });
  }


  reset() {
    localStorage.removeItem("serviceId");
    localStorage.removeItem("retourne");
  }

  detail(serviceId: number) {
    this.reset();
    localStorage.setItem("serviceId", serviceId.toString());
    //this.router.navigate(['services-details']);
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
