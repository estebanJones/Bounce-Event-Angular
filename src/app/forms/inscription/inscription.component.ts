import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cpuUsage } from 'process';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  @Output() goToConnexion: EventEmitter<boolean> = new EventEmitter();
  constructor(private inscriptionService : InscriptionService) { }

  ngOnInit(): void {
  }

  
  onGoToConnexion(bool : boolean){
    this.goToConnexion.emit(bool);
  }

  inscription(form: NgForm) {
    this.inscriptionService.inscription(form.value['age'], form.value['nom'], form.value['prenom'], form.value['email'], 
    form.value['numeroPortable'], form.value['password'], form.value['username'])
                           .subscribe(data => console.log("data", data),
                           error => console.log(error));
  }
}
