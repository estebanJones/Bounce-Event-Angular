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
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [ConnectionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
