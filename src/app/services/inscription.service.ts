import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoRegister } from '../entites/dto/DtoRegister';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http : HttpClient) { }

  inscription(dto : DtoRegister) : Observable<Object> {
                
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post('http://localhost:8080/bounce_event/register',
    { 
     nom: dto.nom,
     prenom:dto. prenom,
     email: dto.email,
     numeroPortable: dto.numeroPortable,
     password: dto.password,
     username: dto.username,
     civilite: dto.civilite,
     numeroRue: dto.numeroRue,
     libelleRue: dto.libelleRue,
     ville: dto.ville,
     batiment: dto.batiment,
     lieuDit: dto.lieuDit,
     codePostal: dto.codePostal,
     pays: dto.pays,
     dateNaissance: dto.dateNaissance
    },
    httpOptions);
  }
}
