import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { MoyenPaiementComponent } from './pages/profil/moyen-paiement/moyen-paiement.component';
import { ProfilUtilisateurComponent } from './pages/profil/profil-utilisateur/profil-utilisateur.component';
import { DetailProfilComponent } from './pages/profil/detail-profil/detail-profil.component';


export const ROUTES : Routes = [
  

  { path: 'accueil', component: AccueilComponent },
  { path: 'connection', component: AuthComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil/:idUtilisateur', component: ProfilUtilisateurComponent, children: [
        {path: 'details', component: DetailProfilComponent },
        {path: 'commandes', component: MoyenPaiementComponent }
  ], canActivate: [ StatutConnecteService ]  },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
