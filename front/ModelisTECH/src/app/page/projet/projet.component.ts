import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { RealisationController, Realisation } from '../../services/controller/realisation.controller';
import {environment} from '../../../environment/environment';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './projet.component.html'
})
export class ProjetComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private realisationController: RealisationController,
  ) {}

  background = 'images/page-bg/projet.jpg';
  realisations: Realisation[] = [];
  activeTabIndex: number = 0;
  apiBaseUrl = environment.apiUrl;

  ngOnInit(): void {
    this.realisationController.listAll().subscribe({
      next: (response: any) => {
        this.realisations = response;

        // activeTab pour chaque réalisation
        this.realisations.forEach(realisation => {
          realisation.activeTab = 'description';

        });

        console.log('Réalisations chargées:', this.realisations);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des réalisations:', error);
      }
    });
  }

  setActiveTab(projetIndex: number, tab: 'description' | 'client' | 'pays' | 'duree' | 'resultat') {
    if (this.realisations[projetIndex]) {
      this.realisations[projetIndex].activeTab = tab;
    }
  }
  getFullImageUrl(imagePath: string): string {
    return `${this.apiBaseUrl}${imagePath}`;
  }
}
