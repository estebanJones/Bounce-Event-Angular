import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectionFormComponent } from './forms/connection-form/connection-form.component';
import { ConnectionServiceService } from './services/connection-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarProfilComponent } from './pages/profil/navbar-profil/navbar-profil.component';
import { DetailProfilComponent } from './pages/profil/detail-profil/detail-profil.component';
import { AdresseProfilComponent } from './pages/profil/adresse-profil/adresse-profil.component';
import { MoyenPaiementComponent } from './pages/profil/moyen-paiement/moyen-paiement.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarousselComponent } from './carroussel/caroussel/caroussel.component';
import { ModalComponent } from './pages/modal/modal.component';



export const ROUTES : Routes = [
  
  { path: 'accueil', component: AccueilComponent },
  { path: 'connection', component: ConnectionFormComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil/:idUtilisateur', component: ProfilUtilisateurComponent },

  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectionFormComponent,
    AccueilComponent,
    ProfilUtilisateurComponent,
    InscriptionComponent,
    NavbarComponent,
    NavbarProfilComponent,
    DetailProfilComponent,
    AdresseProfilComponent,
    MoyenPaiementComponent,
    CarousselComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ConnectionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
