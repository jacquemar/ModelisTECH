import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
//import {HeaderComponent} from './layout/header/header.component';
//import {MenuComponent} from './layout/menu/menu.component'
import {NavbarComponent} from './layout/navbar/navbar.component';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ModelisGroup';
}
