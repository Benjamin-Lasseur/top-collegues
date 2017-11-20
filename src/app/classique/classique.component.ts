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
  
  public limite:number=3
  public commencePar:string
   constructor(colServ:CollegueService){
     super(colServ)
   }

   changeLimite($event){
     if($event.target.value){
      this.limite=<number>$event.target.value
     }else{
      this.limite=3
     }
     
   }

   changeFiltre($event){
     this.commencePar=<string>$event.target.value
   }
  

}
