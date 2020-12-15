import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Utilisateur } from './entites/utilisateur';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  utilisateurConnecte: Observable<Utilisateur>;
  isConnected : Observable<Utilisateur>;
  roleUtilisateur: string;

  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) {
    this.roleUtilisateur = localStorage.getItem("roleUtilisateur");
    this.isConnected = authSrv.verifierAuthentification();
  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe(
      () => this.router.navigate([''])
    );
  }

  /**
   * A l'initialisation, le composant s'abonne au flux de l'utilisateur courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.utilisateurConnecte = this.authSrv.utilisateurConnecteObs;
    }
  
  getRoles(utilisateur: Utilisateur) : string {
    return this.menuService.recupererRoleUtilisateur(utilisateur);
  }

  getId(): string {
    return localStorage.getItem("idUtilisateur");
  }
}
