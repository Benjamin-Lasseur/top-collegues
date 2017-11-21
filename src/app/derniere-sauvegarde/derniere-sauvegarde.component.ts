import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-derniere-sauvegarde',
  templateUrl: './derniere-sauvegarde.component.html',
  styleUrls: ['./derniere-sauvegarde.component.css']
})
export class DerniereSauvegardeComponent implements OnInit {

  constructor(public colServ: CollegueService) { }
  collegue: Collegue
  ngOnInit() {
    this.colServ.obtenirDerniereSauvegarde().subscribe(col => { this.collegue = col })
  }

}
