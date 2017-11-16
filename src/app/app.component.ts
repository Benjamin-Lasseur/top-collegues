import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Collegue} from './shared/domain/collegue'
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private collegues:Collegue[]
  private afficherAlert:boolean
  
  ngOnInit() {
    this.afficherAlert=false
  this.collegues=[new Collegue('Flo',"https://avatars2.githubusercontent.com/u/32134408?s=460&v=4",100),
                  new Collegue('Ange',"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/13718618_10206797573730295_416918136225900560_n.jpg?oh=6e4ffe8dfb53b2b5be2171ba628589c2&oe=5A91BF90",150),
                  new Collegue('Ben',"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/15032783_10210774365305652_7885740775892483196_n.jpg?oh=dc73dd058f80a4618debba6de416d356&oe=5A9C4661",1000000000000000),
                  new Collegue('Jean-Hubert',"http://img.actionco.fr/Img/BREVE/2015/9/258695/Jean-Hubert-Bannwarth-directeur-commercial-April-Sante-Prevoyance-L.jpg",1),
                  new Collegue('René Coty',"http://www.lefigaro.fr/medias/2014/09/05/PHO10dc65fe-34df-11e4-99ab-aca933a9442f-805x453.jpg",20)
                ]
  }

  add(pseudo:HTMLInputElement, url:HTMLInputElement){
    this.collegues.push(new Collegue(pseudo.value,url.value,100))
    this.afficherAlert = true
    return false
  }
}
