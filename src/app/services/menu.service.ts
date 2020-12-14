import { Injectable } from '@angular/core';
import { Utilisateur } from '../entites/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  recupererRoleUtilisateur(utilisateur : Utilisateur) : string {
    let valuePrecedent: number = 0;
    let valueActuelle = 0;
    let roleFinal;

    utilisateur.roles.forEach(valeurRole => {
      valueActuelle = +valeurRole;

      if(valueActuelle > valuePrecedent) {
        valuePrecedent = valueActuelle;
      }
    
    
      
    switch ( valuePrecedent ){
      case 3 :
          roleFinal = "manager";
        break;
      
      case 2 :
        roleFinal = "admin";
        break;

      case 1 :
        roleFinal = "utilisateur";
        break;
    }
      
    });

    //localStorage.setItem("roleUtilisateur", roleFinal);
    return roleFinal;
  }
}
