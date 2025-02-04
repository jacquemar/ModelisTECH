import { Component, OnInit } from '@angular/core';
import {CarriereController} from '../../services/controller/carriere.controller';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../../layout/footer/footer.component';

@Component({
  selector: 'app-carriere',
  templateUrl: './carriere.component.html',
  imports: [CommonModule, FooterComponent],
  styleUrls: ['./carriere.component.css']
})
export class CarriereComponent implements OnInit {
  background= 'images/page-bg/carriere.jpg';
  offres: any[] = [];
  constructor(private carriereService: CarriereController) {}

  ngOnInit(): void {
    this.carriereService.list().subscribe({
      next: (response) => {
        this.offres = response;
        console.log('Liste des offres :', this.offres);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des offres :', error);
      }
    });
  }
}
