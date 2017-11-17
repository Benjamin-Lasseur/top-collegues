import { Component, OnInit ,Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ConteneurComponent } from '../conteneur/conteneur.component';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends ConteneurComponent implements OnInit {
  
   constructor(colServ:CollegueService){
     super(colServ)
   }
  

}
