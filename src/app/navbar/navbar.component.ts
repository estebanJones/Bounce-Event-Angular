import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cheminImage = 'assets/Logo.png';
  links = [
    { title: 'Home', fragment: 'accueil' },
    { title: 'Inscription', fragment: 'inscription' },
    { title: 'Connexion', fragment: 'connection' },
    { title: 'Profil', fragment: 'profil/:idUtilisateur'},
  ];

  faUserCircle = faUserCircle;
  
 

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {

   
  }

  onClick(){
    console.log("link", this.links)
  }
  onClickProfile() {
  
  }
}
