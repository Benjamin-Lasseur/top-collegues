import { Component, OnInit } from '@angular/core';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue-cla',
  templateUrl: './un-collegue-cla.component.html',
  styleUrls: ['./un-collegue-cla.component.css']
})
export class UnCollegueClaComponent extends UnCollegueComponent implements OnInit {
  constructor(colServ: CollegueService, router: Router) {
    super(colServ, router)
   }
}
