import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // Remarquez bien le "s"
})
export class AboutComponent implements AfterViewInit {
  imgPath = '/images/page-bg/tout-MODELIS.png';
  imgCard1 = '/images/page-bg/genie-civil.jpg';
  imgCard2 = '/images/page-bg/geo2.jpg';
  imgCard3 = '/images/page-bg/ingenieurs-tech.jpg';

  @ViewChild('animatedImage') animatedImage!: ElementRef;
  @ViewChild('aboutSection', { static: true }) aboutSection!: ElementRef;
  @ViewChild('textContent', { static: true }) textContent!: ElementRef;

  ngAfterViewInit() {
    if (this.animatedImage) {
      // Animation de l'image
      gsap.fromTo(
        this.animatedImage.nativeElement,
        { opacity: 0, x: -50, rotate: -5 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: this.animatedImage.nativeElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animation de flottement de l'image
      gsap.to(this.animatedImage.nativeElement, {
        y: -10,
        scrollTrigger: {
          trigger: this.animatedImage.nativeElement,
          start: 'top bottom',
          scrub: true
        }
      });

      // Animation unique pour domainesPiliers
      gsap.fromTo(
        "#domainesPiliers",
        {
          opacity: 0,
          scale: 0.8,
          y: 50 // Ajout d'un mouvement vertical
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#domainesPiliers",
            start: "top 80%",
            end: "+=300",
            scrub: false,
            toggleActions: "play none none none"
          }
        }
      );

      // Animation du texte content
      gsap.fromTo(
        this.textContent.nativeElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: this.aboutSection.nativeElement,
            start: 'top 80%',
            end: 'center center',
            scrub: true
          }
        }
      );
    }
  }

  /**
   * Déclenche l'animation flip lors du survol de la carte.
   * @param event MouseEvent
   */

  flip(event: Event) {
    const cardElement = (event.currentTarget as HTMLElement).querySelector('.flip-inner');
    if (cardElement) {
      gsap.to(cardElement, {
        rotationY: 180,
        duration: 0.7,
        ease: 'power2.out'
      });
    }
  }

  /**
   * Remet la carte à sa position initiale lorsque le survol se termine.
   * @param event MouseEvent
   */

  unflip(event: Event) {
    const cardElement = (event.currentTarget as HTMLElement).querySelector('.flip-inner');
    if (cardElement) {
      gsap.to(cardElement, {
        rotationY: 0,
        duration: 0.7,
        ease: 'power2.out'
      });
    }
  }
}
