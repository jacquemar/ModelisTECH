import { Component, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from '../../layout/slider/slider.component';


@Component({
  selector: 'app-accueil',
  imports: [MatSliderModule, SliderComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
