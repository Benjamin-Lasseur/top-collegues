import { Component, OnInit , Input} from '@angular/core';
import { HistoriqueVote } from '../shared/domain/historiqueVote';


@Component({
  selector: 'app-un-historique-vote',
  templateUrl: './un-historique-vote.component.html',
  styleUrls: ['./un-historique-vote.component.css']
})
export class UnHistoriqueVoteComponent implements OnInit {

  @Input() historique : HistoriqueVote
  public supprimer:boolean
  constructor() { }

  ngOnInit() {
  }

  cacher(){
    this.supprimer=true
  }

}
