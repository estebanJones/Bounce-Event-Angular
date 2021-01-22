import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  idUtilisateur: string = "?";
  utilisateur = {};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.utilisateur =  localStorage.getItem("utilisateur");
      this.activatedRoute.paramMap.subscribe( params => {
      this.idUtilisateur = params.get('username');
    })
  }

}
