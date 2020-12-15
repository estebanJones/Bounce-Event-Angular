import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private http: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  

  constructor(private http: HttpClient) { }


  connection(username: string, password: string, resterConnecter: boolean) : Observable<Object> {
    console.log("la");
    const httpOptions = {
    headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
     })
    };

    return this.http.post('http://localhost:8080/bounce_event/connection',
      {
        username: username,
	      password: password,
        resterConnecter: resterConnecter
      },

      httpOptions
    )
  }
}
