
import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element';

register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements AfterViewInit {
  private swiper: any;

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      // Initialiser Swiper
      this.swiper = (swiperEl as SwiperContainer).swiper;

      // Configurer les boutons de navigation personnalisés
      const prevButton = document.getElementById('prevButton');
      const nextButton = document.getElementById('nextButton');

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
          this.swiper.slidePrev();
        });
        nextButton.addEventListener('click', () => {
          this.swiper.slideNext();
        });
      }
    }
  }
}