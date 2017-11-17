import { Component, OnInit ,Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ConteneurComponent } from '../conteneur/conteneur.component';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends ConteneurComponent implements OnInit {
  
   constructor(colServ:CollegueService){
     super(colServ)
   }
  
}
