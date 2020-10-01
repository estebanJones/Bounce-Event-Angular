import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/entites/utilisateur';
import { ConnectionServiceService } from 'src/app/services/connection-service.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {
  
  constructor(private connectionService: ConnectionServiceService, private router : Router) { }
  
  ngOnInit(): void {
  }
  
  
  login(form: NgForm) {
    
    let utilisateur = new Utilisateur();
    return this.connectionService.connection(form.value.username, form.value.password, form.value.resterConnecter)
                                 .subscribe(data => {
                                  utilisateur.username = data['username'];
                                  utilisateur.imageUrl = "https://a.wattpad.com/useravatar/kage_itachi.256.346897.jpg";
                                  utilisateur.resterConnecter = form.value.resterConnecter;
                                  utilisateur.tokenConnection = data['tokenConnection'];
                                  
                                  localStorage.setItem("utilisateur", JSON.stringify(utilisateur));      
                                 // this.router.navigate([`profil/${data['idUtilisateur']}`]);
                                },
                                  error => this.router.navigate(['']));
  }
}
