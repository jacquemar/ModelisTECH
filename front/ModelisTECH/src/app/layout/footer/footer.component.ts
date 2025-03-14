import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BlogController, Blog} from '../../services/controller/blog.controller';
import {ContactController} from '../../services/controller/contact.controller';
import {environment} from '../../../environment/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
    imports: [
        NgForOf,
        CommonModule,
        RouterModule
    ],
  standalone:true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  constructor(private blogController: BlogController, private contactController: ContactController, private http: HttpClient) {
  }
  blogs: Blog[] = [];
  contacts: any[] = [];
  codePays = environment.codePays;
  logoImage:any;
  apiUrl = environment.apiUrl;

  ngOnInit(): void {
    this.logoImage = `images/logos/${this.codePays}-logo2.png`;
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

  // Fonctions de défilement
  scrollToAbout(event: Event) {
    event.preventDefault();
    const aboutSection = document.getElementById('next-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToServices(event: Event) {
    event.preventDefault();
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTeam(event: Event) {
    event.preventDefault();
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToProjects(event: Event) {
    event.preventDefault();
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
