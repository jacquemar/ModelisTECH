import { Routes } from '@angular/router';
import {AccueilComponent} from './page/accueil/accueil.component';
import {EquipeComponent} from './page/equipe/equipe.component';
import {ProjetComponent} from './page/projet/projet.component';
import {BlogComponent} from './page/blog/blog.component';
import {CarriereComponent} from './page/carriere/carriere.component';
import {ContactComponent} from './page/contact/contact.component';
import {AproposComponent} from './page/apropos/apropos.component';
import {ServicePageComponent} from './page/service-page/service-page.component';

export const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'services', component: ServicePageComponent},
  {path: 'equipe', component: EquipeComponent},
  {path: 'projets', component: ProjetComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'carriere', component: CarriereComponent},
  {path: 'contacts', component: ContactComponent},
];
