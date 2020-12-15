import { Injectable } from '@angular/core';
import { Utilisateur } from '../entites/utilisateur';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
  /**
 * Collègue anonyme.
 *
 */
const UTILISATEUR_ANONYME = new Utilisateur({});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Flux due l'utilisateur connecté. Les abonnés sont notifiés dès qu'une connexion ou une déconnexion a lieu.
   *
   * A l'initialisation, le collègue connecté vaut 'undefined'.
   *
   */
  private utilisateurConnecteSub: BehaviorSubject<Utilisateur> = new BehaviorSubject(UTILISATEUR_ANONYME);

  constructor(private http: HttpClient) { }

    /**
   * Interface Observable du collègue connecté.
   *
   */
  get utilisateurConnecteObs(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.asObservable();
  }

  /**
   * Service permettant de vérifier si un utilisateur est authentifié.
   *
   * Une requête HTTP est déclenchée pour récupérer le collègue connecté s'il n'est pas en cache.
   *
   */
  verifierAuthentification(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.getValue().estAnonyme() ?
            this.http.get<Utilisateur>(`${environment.baseUrl}${environment.apiRacine}${environment.apiAuthMe}`, {withCredentials: true})
                  .pipe(
                    map(utilisateurServeur => new Utilisateur(utilisateurServeur)),
                    tap(col => this.utilisateurConnecteSub.next(col)),
                    catchError(err => of(UTILISATEUR_ANONYME))
                  )   :   of(this.utilisateurConnecteSub.getValue());
  }

  /**
   * Connexion de l'utilisateur.
   *
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   *
   */
  connecter(email: string, mdp: string): Observable<Utilisateur> {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(`${environment.baseUrl}${environment.apiLogin}`,
      new HttpParams().set('username', email).set('password', mdp), config)
      .pipe(
        map(utilisateurServeur => new Utilisateur(utilisateurServeur)),
        tap(utilisateur => this.utilisateurConnecteSub.next(utilisateur))
      );
  }

  /**
   * Déconnexion de l'utilisateur.
   *
   * Le serveur provoque la suppression du cookie AUTH-TOKEN.
   *
   */
  seDeconnecter() {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    localStorage.removeItem("idUtilisateur");
    localStorage.removeItem("roleUtilisateur");

    return this.http.post<Utilisateur>(`${environment.baseUrl}${environment.apiLogout}`, null , config)
      .pipe(
        tap(col => this.utilisateurConnecteSub.next(UTILISATEUR_ANONYME))
      );
  }

  isAuthenticated() : boolean {
    return localStorage.getItem("idUtilisateur") != null ? true : false;
  }
}
