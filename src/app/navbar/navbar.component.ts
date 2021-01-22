import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { InscriptionComponent } from '../forms/inscription/inscription.component';
import { ModalComponent } from '../modal/modal.component';
import { LocalStorageWrapperService } from '../wrappers/local-storage-wrapper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @ViewChild(ModalComponent) modale : ModalComponent;
  @ViewChild(InscriptionComponent) inscription : InscriptionComponent;

  cheminImage = 'assets/Logo.png';
  idUtilisateur : string = "";
  links = [
    { title: 'Home', fragment: 'accueil' },
    { title: 'Inscription', fragment: 'inscription' },
    { title: 'Connexion', fragment: 'connection' },
    { title: 'Profil', fragment: `profil/:idUtilisateur`}
  ];

  faUserCircle = faUserCircle;
  isActive = true;
  closeResult: string = '';
  connexionActive : boolean ;
  inscriptionActive : boolean;

  constructor(private _router: Router, public route: ActivatedRoute, private modalService: NgbModal, private authService : AuthService, 
    private _localStorage : LocalStorageWrapperService) { }

  ngOnInit(): void {
    this.connexionActive = this.authService.isAuthenticated();
    this.inscriptionActive = !this.connexionActive;
    this.idUtilisateur = this._localStorage.getItemLocalStorage("idUtilisateur");
  }

  onClickConnexion(bool : boolean){
    this.connexionActive = bool;
    this.inscriptionActive = !this.connexionActive;
     }

  onClickInscription(bool : boolean){
    this.inscriptionActive = bool;
    this.connexionActive = !this.inscriptionActive;
    }

  onClickProfile() {
    this._router.navigate(['/profil', this.idUtilisateur])
  }

  
  open(content) {
    console.log("content on open modale (modale)" , content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
