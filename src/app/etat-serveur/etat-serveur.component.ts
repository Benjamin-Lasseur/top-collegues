import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-etat-serveur',
  templateUrl: './etat-serveur.component.html',
  styleUrls: ['./etat-serveur.component.css']
})
export class EtatServeurComponent implements OnInit {
  etat: boolean = false
  constructor(public colServ: CollegueService) { }

  ngOnInit() {
    this.colServ.obtenirEtat().subscribe(etat => { this.etat = etat })
  }

}
