import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ContactController} from '../../services/controller/contact.controller';
import {environment} from '../../../environment/environment';
import {list} from 'postcss';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [

    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  contacts: any[] = [];
  apiUrl = environment.apiUrl;
  codePays = environment.codePays;
  logoImage:any;

  constructor( private http: HttpClient, private contactController: ContactController ) {}

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

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
