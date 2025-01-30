import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../layout/footer/footer.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environment/environment';
import {CommonModule} from '@angular/common';
import {EquipeContentComponent} from '../../layout/equipe-content/equipe-content.component';

@Component({
  selector: 'app-equipe',
  imports: [FooterComponent, CommonModule, EquipeContentComponent],
  standalone: true,
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent{
  background = '/images/page-bg/equipe.png';

}
