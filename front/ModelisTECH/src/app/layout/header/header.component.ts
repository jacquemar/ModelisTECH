import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactController} from '../../services/controller/contact.controller';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


  constructor(private http: HttpClient, private contactController: ContactController) {
  }
  contacts: any[] = [];

  ngOnInit(): void{

    this.contactController.listAll().subscribe({
      next:(response: any) => {
        this.contacts = response;
        console.log(this.contacts)
      },
        error:(error) => {
        console.error('erreur lors de la recuperation des contacts', error)
        }
    })

  }
}
