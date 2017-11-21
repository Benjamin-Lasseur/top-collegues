import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue'
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
import { CollegueService } from './shared/service/collegue.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activerBouton:boolean

  constructor(public colServ: CollegueService) {
  }
  
  ngOnInit() {
    this.colServ.obtenirEtat().subscribe(etat=>{this.activerBouton=etat})
  }

  add(pseudo: HTMLInputElement, url: HTMLInputElement) {
    this.colServ.sauvegarder(new Collegue(pseudo.value, url.value, 100,0))
    pseudo.value=''
    url.value=''
    return false
  }


}
