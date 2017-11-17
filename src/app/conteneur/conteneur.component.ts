import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent implements OnInit{

  collegues:Collegue[]
  constructor(public colServ:CollegueService) { }

  ngOnInit() {
    this.colServ.listerCollegues().then(cols=>{this.collegues=cols.sort(this.compare)})
  }

  compare(a, b):number {
    if (a.score>b.score)
       return -1;
    if (a.score<b.score)
       return 1;
    return 0;
  }

}
