import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environment/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  apiUrl = environment.apiUrl;
  codePays = environment.codePays;
  logoImage:any;

  ngOnInit() {
    this.logoImage = `images/logos/${this.codePays}-logo.png`;
  }




}
