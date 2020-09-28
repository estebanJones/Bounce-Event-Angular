import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cpuUsage } from 'process';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private inscriptionService : InscriptionService) { }

  ngOnInit(): void {
  }

  inscription(form: NgForm) {
    console.log("form ", form);
    this.inscriptionService.inscription(form.value['age'], form.value['nom'], form.value['prenom'], form.value['email'], 
    form.value['numeroPortable'], form.value['password'], form.value['username'])
                           .subscribe(data => console.log("data", data),
                           error => console.log(error),
                           () => {});
  }
}
