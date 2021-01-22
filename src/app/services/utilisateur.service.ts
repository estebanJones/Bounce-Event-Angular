import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../entites/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }
 
  updateProfil(age: string, nom:string, prenom:string, email:string, numeroPortable:string, password:string, username:string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" :  "application/json"
      })
    };

    return this.http.put('http://localhost:8080/bounce_event/register',{
      age: age,
      nom: nom,
      prenom: prenom,
      email: email,
      numeroPortable: numeroPortable,
      password: password,
      username: username
    })
  }


  getUtilisateurById(id:string): Observable<Utilisateur> {
      return this.http.get<Utilisateur>(`http://localhost:8080/bounce_event/profil/${id}`)
  }

}
