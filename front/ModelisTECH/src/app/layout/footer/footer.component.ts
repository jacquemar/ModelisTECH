import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BlogController, Blog} from '../../services/controller/blog.controller';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient, private blogController: BlogController,) {
  }
  blogs: Blog[] = [];
  liens = [
    { libelle: 'LinkedIn', lien: 'https://www.linkedin.com/company/modelis-tech' },
    { libelle: 'Twitter', lien: 'https://twitter.com/ModelisTech' },
    { libelle: 'GitHub', lien: 'https://github.com/modelistech' },
    { libelle: 'Contact', lien: 'mailto:contact@modelistech.com' }
  ];


  contacts = [
    {
      adresse: '123 Rue des Entreprises, Paris, France',
      email: 'contact@modelistech.com',
      tel: '+33 1 23 45 67 89'
    }
  ];

  ngOnInit(): void {
    this.blogController.listAll().subscribe({
      next: (response: any) => {
        this.blogs = response;
        console.log('Articles chargées:', this.blogs);

      },
        error: (error) => {
        console.error('Erreur lors du chargement des articles', error)
        }
      })
  } }
