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

  cols:Collegue[]
  afficherAlert: boolean

  constructor(public colServ: CollegueService) {

  }
  ngOnInit() {
    this.afficherAlert = false
    this.colServ.listerCollegues().then(data=>{this.cols = data})
  }

  add(pseudo: HTMLInputElement, url: HTMLInputElement) {
    this.colServ.sauvegarder(new Collegue(pseudo.value, url.value, 100,0)).then(col => {this.cols.push(col)})
    this.afficherAlert = true
    pseudo.value=''
    url.value=''
    return false
  }


}
