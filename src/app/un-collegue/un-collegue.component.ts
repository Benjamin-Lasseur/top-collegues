import { Component, OnInit ,Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue
  constructor(public colServ: CollegueService, public router: Router) { }

  ngOnInit() {
  }

  jaime(){
    this.colServ.aimerUnCollegue(this.collegue).then(col =>{this.collegue=col})
  }

  jeDeteste(){
    this.colServ.detesterUnCollegue(this.collegue).then(col =>{this.collegue=col})
  }

  changerDePage() {
    this.router.navigate([`/detail/${this.collegue.id}`])
    }

}
