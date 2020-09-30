import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/entites/utilisateur';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {
  @Input()
  utilisateurCache : string;

  infosUtilisateur: any;
  constructor() { }

  ngOnInit(): void {
    this.infosUtilisateur = JSON.parse(this.utilisateurCache);
    console.log("photoUrl ",this.infosUtilisateur.imageUrl);
  }

  modifier() {
    
  }
}
