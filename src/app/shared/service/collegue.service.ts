import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CollegueService {



  constructor(private http: HttpClient) {
  }

  listerCollegues(): Promise<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/api/collegues').toPromise()
  }

  sauvegarder(newCollegue: Collegue): Promise<Collegue> {

    return this.http.post<Collegue>('http://localhost:8080/api/collegues', newCollegue, httpOptions).toPromise()
  }

  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    unCollegue.score += 10
    return this.http.put<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.id}/score`, unCollegue, httpOptions).toPromise()

  }

  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {

    unCollegue.score -= 5
    return this.http.put<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.id}/score`, unCollegue, httpOptions).toPromise()
  }

}