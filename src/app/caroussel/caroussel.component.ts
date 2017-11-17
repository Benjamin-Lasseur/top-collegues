import { Component, OnInit ,Input} from '@angular/core';

import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ConteneurComponent } from '../conteneur/conteneur.component';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent extends ConteneurComponent implements OnInit {

 constructor(colServ:CollegueService){
   super(colServ)
 }

}
