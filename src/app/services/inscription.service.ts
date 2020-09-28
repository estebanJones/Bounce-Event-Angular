import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http : HttpClient) { }

  inscription(age: number, nom: string, prenom: string, email: string, 
              numeroPortable: string, password: string, username: string) : Observable<Object> {
                
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post('http://localhost:8080/bounce_event/register',
    { 
     age: age,
     nom: nom,
     prenom: prenom,
     email: email,
     numeroPortable: numeroPortable,
     password: password,
     username: username
    },
    httpOptions);
  }
}
