
import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ContactController} from '../../services/controller/contact.controller';
import {environment} from '../../../environment/environment';
import {list} from 'postcss';


@Component({
  selector: 'app-navbar',
  imports: [

    CommonModule
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  contacts: any[] = [];
  apiUrl = environment.apiUrl;
  codePays = environment.codePays;
  logoImage:any;

  constructor( private http: HttpClient, private contactController: ContactController ) {}

  navItems= [

  ]

  ngOnInit() {
    this.logoImage = `images/logos/${this.codePays}-logo2.png`;

    this.contactController.listAll().subscribe({
      next:(response) => {
        this.contacts = response;
        console.log(this.contacts)
      },
      error: (error) => {
        console.error("erreur lors de la recuperation des contacts", error);
      }
    })
  }

  protected readonly list = list;
}
