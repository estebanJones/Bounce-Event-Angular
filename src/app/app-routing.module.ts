import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';


export const ROUTES : Routes = [
  

  { path: 'accueil', component: AccueilComponent },
  { path: 'connection', component: AuthComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil/:idUtilisateur', component: ProfilUtilisateurComponent,  canActivate: [ StatutConnecteService ]  },

  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
