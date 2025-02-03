import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../layout/footer/footer.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environment/environment';
import {CommonModule} from '@angular/common';

interface Blog {
  id: number;
  utilisateurId: UtilisateurId;
  libelle: string;
  description: string;
  image: [];
  dateCreation: string
}
interface UtilisateurId {
  id: number;
  personneId: PersonneId;
  email: string;
  motDePasse: string;
  dateCreation: string;
  roles: string;
}
interface PersonneId {
  id: number;
  profilId: number;
  PaysResidence: string,
  nationnalite: string;
  nom: string;
  prenom: string;
  linkedin: string;
  sexe: string;
  email: string;
  tel: number;
  adresse:string;
  image: [];
  dateNaissance: number;
  dateCreation: number;
}
@Component({
  selector: 'app-blog',
  imports: [FooterComponent, CommonModule],
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  background= 'images/page-bg/blog.jpg';
  blogs: Blog[] = [];
  imgBack= environment.apiUrl;
  constructor(private http: HttpClient) {}

  BlogListAll(): void {
    this.http.get<Blog[]>(environment.apiUrl+'api/blog')
      .subscribe({
        next: (data) => {
          this.blogs = data;
          console.log(this.blogs);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des données', err);
        }
      });
  }
  ngOnInit() {
    this.BlogListAll()
  }
}

