import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarProfilComponent } from './pages/profil/navbar-profil/navbar-profil.component';
import { DetailProfilComponent } from './pages/profil/detail-profil/detail-profil.component';
import { AdresseProfilComponent } from './pages/profil/adresse-profil/adresse-profil.component';
import { MoyenPaiementComponent } from './pages/profil/moyen-paiement/moyen-paiement.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarousselComponent } from './carroussel/caroussel/caroussel.component';
import { ModalComponent } from './pages/modal/modal.component';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProfilUtilisateurComponent,
    InscriptionComponent,
    NavbarComponent,
    NavbarProfilComponent,
    DetailProfilComponent,
    AdresseProfilComponent,
    MoyenPaiementComponent,
    CarousselComponent,
    ModalComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    CommonModule,
    AppRoutingModule,
    NgbModalModule,
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    MenuService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
