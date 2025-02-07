import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BlogController, Blog} from '../../services/controller/blog.controller';
import {HttpClient} from '@angular/common/http';
import {ContactController} from '../../services/controller/contact.controller';
import {environment} from '../../../environment/environment';

@Component({
  selector: 'app-footer',
    imports: [
        NgForOf
    ],
  standalone:true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  constructor(private http: HttpClient, private blogController: BlogController, private contactController: ContactController) {
  }
  blogs: Blog[] = [];
  contacts: any[] = [];
  codePays = environment.codePays;
  logoImage:any;

  ngOnInit(): void {
    this.logoImage = `images/logos/${this.codePays}-logo.png`;
    this.blogController.listAll().subscribe({
      next: (response: any) => {
        this.blogs = response;
      },
        error: (error) => {
        console.error('Erreur lors du chargement des articles', error)
      }
    })

    this.contactController.listAll().subscribe({
      next: (response: any) => {
        this.contacts = response;
        console.log(this.contacts);
      },
      error: (error) => {
        console.error('erreur lors de la récupération des contacts', error)
      }
    })
  }
}
