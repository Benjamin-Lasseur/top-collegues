import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute, Router } from '@angular/router';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
  col: Collegue
  constructor(public colServ: CollegueService, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.colServ.trouverCollegue(params['id']).then(c => { this.col=c })
    })
  }

  jaime() {
    this.colServ.aimerUnCollegue(this.col).then(col => { this.col = col })
  }

  jeDeteste() {
    this.colServ.detesterUnCollegue(this.col).then(col => { this.col = col })
  }


}
