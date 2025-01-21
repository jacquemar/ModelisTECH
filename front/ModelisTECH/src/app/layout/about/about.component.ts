import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  imgPath = '/images/page-bg/president.png';
  isVisible = false;

  @ViewChild('animatedSection') animatedSection!: ElementRef;

  ngOnInit(): void {
    // Définir isVisible à false initialement
    this.isVisible = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajouter un petit délai pour s'assurer que la transition s'applique
          setTimeout(() => {
            this.isVisible = true;
          }, 100);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '40px' // Déclenche un peu plus tôt
    });

    // Augmenter le délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
      if (this.animatedSection) {
        observer.observe(this.animatedSection.nativeElement);
      }
    }, 200);
  }
}