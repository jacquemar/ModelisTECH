import { Component } from '@angular/core';
import {ServicesComponent} from '../../layout/service/service.component';
import {FooterComponent} from '../../layout/footer/footer.component';

@Component({
  selector: 'app-service-page',
  imports: [
    ServicesComponent,
    FooterComponent
  ],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  background = 'images/page-bg/services.jpg';
}
