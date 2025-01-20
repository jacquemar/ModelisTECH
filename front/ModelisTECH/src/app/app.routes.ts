import { Routes } from '@angular/router';
import {AccueilComponent} from './page/accueil/accueil.component';

export const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
];
