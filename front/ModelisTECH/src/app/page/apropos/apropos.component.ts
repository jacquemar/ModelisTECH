import { Component } from '@angular/core';
import {FooterComponent} from '../../layout/footer/footer.component';

import {EquipeContentComponent} from '../../layout/equipe-content/equipe-content.component';

@Component({
  selector: 'app-apropos',
  imports: [FooterComponent, EquipeContentComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {
  background = '/images/page-bg/apropos.jpg';
  imgPath = 'images/page-bg/president.png';
  imgFixed = 'images/page-bg/equipe.png'
}
