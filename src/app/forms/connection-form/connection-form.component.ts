import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utilisateur } from 'src/app/entites/utilisateur';
import { ConnectionServiceService } from 'src/app/services/connection-service.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {

  utilisateur: Utilisateur = null;
  constructor(private connectionService: ConnectionServiceService) { }

  ngOnInit(): void {
  }


  connection(form: NgForm) {
    console.log("salut " + form.value.email);
    console.log("salut " + form.value.password);
    console.log("salut " + form.value.resterConnecter);


    return this.connectionService.connection(form.value.email, form.value.password, form.value.resterConnecter)
                                 .subscribe(data => {
                                    console.log("data ", data);
                                },
                                  error => console.log(error)
    );
  }
}
