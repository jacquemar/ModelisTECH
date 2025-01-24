import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  liens = [
    { libelle: 'LinkedIn', lien: 'https://www.linkedin.com/company/modelis-tech' },
    { libelle: 'Twitter', lien: 'https://twitter.com/ModelisTech' },
    { libelle: 'GitHub', lien: 'https://github.com/modelistech' },
    { libelle: 'Contact', lien: 'mailto:contact@modelistech.com' }
  ];

  blogs = [
    { id: 1, libelle: 'Développement logiciel pour entreprises', date: '2021-09-15' },
    { id: 2, libelle: 'Tendances technologiques en 2021', date: '2021-08-01' },
    { id: 3, libelle: 'Sécurité des données dans le cloud', date: '2021-07-25' }
  ];

  contacts = [
    {
      adresse: '123 Rue des Entreprises, Paris, France',
      email: 'contact@modelistech.com',
      tel: '+33 1 23 45 67 89'
    }
  ];

  ngOnInit(): void {
    // Initialisation ou récupération des données, si besoin
  }

  detailblog(blogId: number): void {
    console.log(`Afficher les détails pour le blog ${blogId}`);
  }
}
