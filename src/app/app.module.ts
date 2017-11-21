import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CollegueService} from './shared/service/collegue.service'
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { UnCollegueTabComponent } from './un-collegue-tab/un-collegue-tab.component';
import { UnCollegueCarComponent } from './un-collegue-car/un-collegue-car.component';
import { UnCollegueClaComponent } from './un-collegue-cla/un-collegue-cla.component';
import { ConteneurComponent } from './conteneur/conteneur.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FiltreNomPipe } from './shared/pipe/filtre-nom.pipe';
import { DernierAvisComponent } from './dernier-avis/dernier-avis.component';
import { DerniereSauvegardeComponent } from './derniere-sauvegarde/derniere-sauvegarde.component';
import { EtatServeurComponent } from './etat-serveur/etat-serveur.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { UnHistoriqueVoteComponent } from './un-historique-vote/un-historique-vote.component';


const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
  { path: 'tableau', component: TableauComponent },
  { path: 'caroussel', component: CarousselComponent },
  { path: 'detail/:id', component: DetailCollegueComponent },
  { path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
  ];

@NgModule({

  declarations: [
    AppComponent,
    UnCollegueComponent,
    ClassiqueComponent,
    TableauComponent,
    CarousselComponent,
    UnCollegueTabComponent,
    UnCollegueCarComponent,
    UnCollegueClaComponent,
    ConteneurComponent,
    DetailCollegueComponent,
    ScorePipe,
    FiltreNomPipe,
    DernierAvisComponent,
    DerniereSauvegardeComponent,
    EtatServeurComponent,
    HistoriqueVotesComponent,
    UnHistoriqueVoteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }