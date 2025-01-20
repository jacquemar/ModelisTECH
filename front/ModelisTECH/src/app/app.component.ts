import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {MenuComponent} from './layout/menu/menu.component' 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuComponent ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ModelisTECH';
}
