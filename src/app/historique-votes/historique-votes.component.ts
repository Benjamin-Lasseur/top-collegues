import { Component, OnInit } from '@angular/core';
import { HistoriqueVote } from '../shared/domain/historiqueVote';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  tasHistoriqueVote: HistoriqueVote[]=[]
  constructor(public colServ: CollegueService) { }

  ngOnInit() {
    this.colServ.obtenirHistoriqueVote().subscribe(historique => {historique.forEach(h=>{this.tasHistoriqueVote.push(h)}); this.tasHistoriqueVote.sort(this.compare)})
  }

  compare(a, b):number {
    if (a.id>b.id)
       return -1;
    if (a.id<b.id)
       return 1;
    return 0;
  }

}
