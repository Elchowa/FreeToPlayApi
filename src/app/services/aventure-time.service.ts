import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AventureTimeService {

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get<any>(environment.apiurl + environment.character);
  }

  getGameById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiurl}/game?id=${id}`);
  }
}

