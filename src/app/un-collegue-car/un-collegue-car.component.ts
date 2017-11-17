import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue-car',
  templateUrl: './un-collegue-car.component.html',
  styleUrls: ['./un-collegue-car.component.css']
})
export class UnCollegueCarComponent extends UnCollegueComponent implements OnInit {
  constructor(colServ: CollegueService, router: Router) {
    super(colServ, router)
   }
}
