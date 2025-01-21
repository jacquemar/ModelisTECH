import { Component, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from '../../layout/slider/slider.component';
import { AboutComponent } from '../../layout/about/about.component';
import {ServicesComponent} from '../../layout/service/service.component';


@Component({
  selector: 'app-accueil',
  imports: [MatSliderModule, SliderComponent, AboutComponent, ServicesComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
