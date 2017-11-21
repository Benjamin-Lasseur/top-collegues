import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Avis } from '../shared/domain/avis';

@Component({
  selector: 'app-dernier-avis',
  templateUrl: './dernier-avis.component.html',
  styleUrls: ['./dernier-avis.component.css']
})
export class DernierAvisComponent implements OnInit {

  avis: Avis
  constructor(public colServ: CollegueService) { }

  ngOnInit() {
    this.colServ.obtenirDernierAvis().subscribe(a => { this.avis = a })
  }

}
