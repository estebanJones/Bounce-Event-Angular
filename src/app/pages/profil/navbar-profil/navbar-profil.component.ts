import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-profil',
  templateUrl: './navbar-profil.component.html',
  styleUrls: ['./navbar-profil.component.css']
})
export class NavbarProfilComponent implements OnInit {

  links = [
    { title: 'Profil', fragment: 'profil/:idUtilisateur' },
    { title: 'Commandes', fragment: 'inscription' },
    { title: 'Paramètres', fragment: 'connection' },
  ];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
