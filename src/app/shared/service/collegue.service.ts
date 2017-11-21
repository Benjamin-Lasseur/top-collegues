import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Avis } from '../domain/avis';
import { HistoriqueVote } from '../domain/historiqueVote';
import 'rxjs/add/observable/interval'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CollegueService {

  subject: BehaviorSubject<Collegue[]> = new BehaviorSubject([])
  subDernierVote: BehaviorSubject<Avis> = new BehaviorSubject(null)
  subDerniereSauvegarde: BehaviorSubject<Collegue> = new BehaviorSubject(null)
  subEtat: BehaviorSubject<boolean> = new BehaviorSubject(false)
  subHistoriqueVote: BehaviorSubject<HistoriqueVote[]> = new BehaviorSubject([])
  collegues: Collegue[] = []
  lastHistoriqueId: number = -1


  constructor(private http: HttpClient) {
    this.http.get<HistoriqueVote[]>(`${environment.apiUrl}/votes`).subscribe(historique => { this.update(historique)})
    this.testEtat()
    Observable.interval(5000).subscribe(value => { this.testEtat(); this.testHistorique() })
  }

  listerCollegues(): Subject<Collegue[]> {
    this.http.get<Collegue[]>(`${environment.apiUrl}/collegues`).subscribe(data => { this.collegues = data; this.subject.next(this.collegues) })
    return this.subject
  }

  trouverCollegue(id: number): Observable<Collegue> {
    return this.http.get<Collegue>(`${environment.apiUrl}/collegues/${id}/detail`)

  }

  sauvegarder(newCollegue: Collegue) {
    this.http.post<Collegue>(`${environment.apiUrl}/collegues`, newCollegue, httpOptions).subscribe(col => { this.collegues.push(col); this.subject.next(this.collegues); this.subDerniereSauvegarde.next(col) })
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.subDernierVote.next(new Avis(true, unCollegue))
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.id}/score`, { "avis": "aimer" }, httpOptions)

  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.subDernierVote.next(new Avis(false, unCollegue))
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.id}/score`, { "avis": "detester" }, httpOptions)
  }

  obtenirDernierAvis(): BehaviorSubject<Avis> {
    return this.subDernierVote
  }

  obtenirDerniereSauvegarde(): BehaviorSubject<Collegue> {
    return this.subDerniereSauvegarde
  }

  obtenirEtat(): Observable<boolean> {
    return this.subEtat
  }

  testEtat(){
    this.http.get<boolean>(`${environment.apiUrl}/ping`).subscribe(etat => { this.subEtat.next(true) }, error => { this.subEtat.next(false) })
  }

  obtenirHistoriqueVote(): BehaviorSubject<HistoriqueVote[]> {
    return this.subHistoriqueVote
  }

  update(historique:HistoriqueVote[]) {
    this.subHistoriqueVote.next(historique); if (historique.length != 0) { this.lastHistoriqueId = historique[historique.length - 1].id }
  }

  testHistorique(): void {
    if (this.lastHistoriqueId == -1) {
      this.http.get<HistoriqueVote[]>(`${environment.apiUrl}/votes`).subscribe(historique => { this.update(historique) })
    } else {
      this.http.get<HistoriqueVote[]>(`${environment.apiUrl}/votes?since=${this.lastHistoriqueId}`)
        .subscribe(historique => { this.update(historique) })
    }
  }

}
