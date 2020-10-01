import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authentifier = false;
  
  constructor(private http : HttpClient) { 
    
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
    } : {} );

    this.http.get('user', {headers: headers}).subscribe(response => {
      if(response['name']) {
        this.authentifier = true;
      } else {
        this.authentifier = false;
      }
      return callback && callback();
    });
  }
}
