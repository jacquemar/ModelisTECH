import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {FooterComponent} from '../../layout/footer/footer.component';
import {LocalisationComponent} from '../../layout/localisation/localisation.component';
import {HttpClient} from '@angular/common/http';
import {ContactController} from '../../services/controller/contact.controller';

interface InfoContact {
  adresse: string;
  tel: string;
  email: string;
}

interface ContactMessage {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, LocalisationComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  constructor(private http: HttpClient, private contactController: ContactController) {
  }
  background= 'images/page-bg/contact.jpg';
  contactInfo: any[] = [];

  contacts: ContactMessage = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: ''
  };

  error: boolean = false;
  success: boolean = false;
  successmes: string = 'Votre message a été envoyé avec succès.';
  errormes: string = 'Une erreur est survenue, veuillez réessayer.';

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Formulaire soumis:', this.contacts);

      this.success = true;
      this.error = false;
      form.resetForm();
    } else {
      this.success = false;
      this.error = true;
    }
  }

  ngOnInit() {
    this.contactController.listAll().subscribe({
      next: (response: any) => {
        this.contactInfo = response;
        console.log(this.contactInfo);
      },
      error: (error) => {
        console.error('erreur lors de la récupération des contacts', error)
      }
    })
  }
}
