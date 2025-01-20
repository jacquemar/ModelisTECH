import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  contacts!: number;
  email!: string;
  adresse!: string;
  pays!: string;
  ContactList!: any[];

  ngOnInit(): void{
    this.ContactList = [
      this.contacts = 2721748434,
      this.adresse = 'Cocody faya en face de la clinique bon samaritain',
      this.email = 'contacts@modelis-tech.com',
      this.pays = 'CIV',
    ];

  }
}
