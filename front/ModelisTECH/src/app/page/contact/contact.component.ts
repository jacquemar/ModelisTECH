import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {FooterComponent} from '../../layout/footer/footer.component';
import {LocalisationComponent} from '../../layout/localisation/localisation.component';

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
export class ContactComponent {
  background= 'images/page-bg/contact.jpg';
  infoContacts: InfoContact[] = [
    {
      adresse: '123 Rue de Exemple, 75000 Paris',
      tel: '+33 1 23 45 67 89',
      email: 'contact@example.com'
    }
  ];

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
}
