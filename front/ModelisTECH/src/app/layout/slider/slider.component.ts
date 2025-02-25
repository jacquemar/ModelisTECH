
import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { DotLottie } from '@lottiefiles/dotlottie-web';


register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements AfterViewInit {
  videoCover= 'videos/videoCover2.mp4';
  dotLottieGlobe: DotLottie | undefined;

  ngAfterViewInit(){

  setTimeout(() => {
  const canvasGlobe = document.querySelector('#globe-canvas');
  if (canvasGlobe) {
    this.dotLottieGlobe = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: canvasGlobe as HTMLCanvasElement,
      src: "https://lottie.host/5bda8009-8131-4171-8957-a4fa6271e24e/sjU1X2NR9E.lottie",
    });
  }
}, 0);
}
}
