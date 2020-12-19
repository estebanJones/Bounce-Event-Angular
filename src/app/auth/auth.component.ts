import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../entites/utilisateur';
import { MenuService } from '../services/menu.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Output() goToSubscribe: EventEmitter<boolean> = new EventEmitter();
  utilisateur : Utilisateur = new Utilisateur({});
  err : boolean;


  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) { }

  ngOnInit(): void {
  }

  connecter() : void {
    console.log("ici");
    this.authSrv.connecter(this.utilisateur.email, this.utilisateur.password)
      .subscribe(
       
        // en cas de succès, redirection vers la page /d'acceuil
       utilisateur => {

          let roleUtilisateur = this.getRoles(utilisateur);

          localStorage.setItem("idUtilisateur", utilisateur.id.toString());
          localStorage.setItem("roleUtilisateur", roleUtilisateur);
         // [`/${roleUtilisateur}/accueil`]
          this.router.navigate(['accueil']);
             
      },
        // en cas d'erreur, affichage d'un message d'erreur
       
        err => console.log("error ", err)
      );
  }

  getRoles(utilisateur: Utilisateur) : string {
    return this.menuService.recupererRoleUtilisateur(utilisateur);
  }

  onGoToSubscribe(bool : boolean){
    this.goToSubscribe.emit(bool);
  }
}
