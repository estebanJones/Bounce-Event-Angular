import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../entites/utilisateur';
import { Observable, Subscription } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private http: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  

  constructor(private http: HttpClient ) { }


  connection(email: string, password: string, resterConnecter: boolean) : Observable<Object> {
    const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
     })
    };

    return this.http.post('http://localhost:8080/bounce_event/connection',
      {
        email: email,
	      password: password,
        resterConnecter: resterConnecter
      },

      httpOptions
    )
  }
}
