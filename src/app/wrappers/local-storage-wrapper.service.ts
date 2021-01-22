import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageWrapperService {

  constructor() { }


  getItemLocalStorage(cle : string) : string {
    return localStorage.getItem(cle);
  }
  setItemToLocalStorage(cle: string, valeur: string) : void {
    localStorage.setItem(cle, valeur);
  }

  removeItemToLocalStorage(cle: string) : void {
    localStorage.removeItem(cle);
  }
}
