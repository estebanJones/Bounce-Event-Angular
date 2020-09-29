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
  
  
  connection(form: NgForm) {
    
    let utilisateur = new Utilisateur();
    return this.connectionService.connection(form.value.email, form.value.password, form.value.resterConnecter)
                                 .subscribe(data => {
                                  utilisateur.username = data['username'];
                                  utilisateur.email = data['email'];
                                                                 
                                  this.router.navigate([`profil/${utilisateur.username}`]);
                                },
                                  error => this.router.navigate(['']));
  }
}
