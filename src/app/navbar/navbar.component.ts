import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    { title: 'Home', fragment: 'accueil' },
    { title: 'Inscription', fragment: 'inscription' },
    { title: 'Connexion', fragment: 'connexion' }
  ];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
