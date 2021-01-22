import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cpuUsage } from 'process';
import { DtoRegister } from 'src/app/entites/dto/DtoRegister';
import { InscriptionService } from 'src/app/services/inscription.service';
import { ECivilite } from 'src/enum/ECivitilite';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  @Output() goToConnexion: EventEmitter<boolean> = new EventEmitter();
  public civilites: any[] = [];
  public dateNaissance = "";
  constructor(private inscriptionService : InscriptionService) { }

  ngOnInit(): void {
    for(const c in ECivilite) {
      this.civilites.push(c.toString());
    }
  }

  
  onGoToConnexion(bool : boolean){
    this.goToConnexion.emit(bool);
  }

  inscription(form: NgForm) {
    const dtoRegister: DtoRegister  = this.getDtoRegister(form);

    this.inscriptionService.inscription(dtoRegister)
                           .subscribe(data => console.log("data", data),
                           error => console.log(error));
  }


  private  getDtoRegister(form:  NgForm) :  DtoRegister{
    return new DtoRegister(form.value['nom'], form.value['prenom'], form.value['email'], 
    form.value['numeroPortable'], form.value['password'], form.value['username'], form.value['civilite'],  
    form.value['numeroRue'], form.value['libelleRue'], form.value['ville'], form.value['batiment'], 
    form.value['lieuDit'], form.value['codePostal'], form.value['pays'], form.value['dateNaissance']);
  }
}
