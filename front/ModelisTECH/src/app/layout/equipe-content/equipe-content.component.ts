import {Component, OnInit} from '@angular/core';
import {NgForOf, JsonPipe} from "@angular/common";
import {environment} from '../../../environment/environment';
import {EquipeController} from '../../services/controller/equipe.controller';


@Component({
  selector: 'app-equipe-content',
    imports: [
        NgForOf,
       
    ],
  standalone: true,
  templateUrl: './equipe-content.component.html',
  styleUrl: './equipe-content.component.css'
})
export class EquipeContentComponent implements OnInit{
  membres: any[] = [];
  imgBack: string = environment.apiUrl;
  codePays= environment.codePays;

  constructor(private equipeController: EquipeController) {}

  fetchEquipe(): void {
    this.equipeController.getPersonnel()
      .subscribe({
        next: (data) => {
          this.membres = data.filter(membre => 
            membre.paysId.code === this.codePays && 
            !(membre.prenom === 'Lizié FRANCK' && membre.nom === 'IRIE BI') &&
            !(membre.prenom === 'Irie Fabrice' && membre.nom === 'IRIE BI')
          );
          console.log(this.membres);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des données', err);
        }
      });
  }

  ngOnInit(): void {
    this.fetchEquipe();
  }
}
