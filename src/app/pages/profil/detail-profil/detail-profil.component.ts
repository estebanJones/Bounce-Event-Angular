import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utilisateur } from 'src/app/entites/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { LocalStorageWrapperService } from 'src/app/wrappers/local-storage-wrapper.service';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {
  @Input()
  utilisateurCache : string;
  utilisateur : Utilisateur;

  infosUtilisateur: any;
  constructor(private  _utilisateurService : UtilisateurService, private _localStorage :  LocalStorageWrapperService) { }

  ngOnInit(): void {
    this._utilisateurService.getUtilisateurById(this._localStorage.getItemLocalStorage("idUtilisateur")).subscribe(
      utilisateur => this.utilisateur = new Utilisateur({utilisateur}),
      echec =>  console.log(echec)
    );
    
    // this.infosUtilisateur = JSON.parse(this.utilisateurCache);
    // console.log("photoUrl ",this.infosUtilisateur.imageUrl);
  }

  modifierProfil(form: NgForm) {
    this._utilisateurService.updateProfil(form.value['age'], form.value['nom'], form.value['prenom'], form.value['email'], 
                                           form.value['numeroPortable'], form.value['password'], form.value['username'])
                           .subscribe(data => console.log("data", data),
                           error => console.log(error));
  }

  check() {
    console.log(this.utilisateur);
  }
}
