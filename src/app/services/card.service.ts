import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from '../model/set';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  url: string = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) {}

  getCardSet(query: string): Observable<Set[]> {
    let url = this.url+"/sets?name="+query;
    return this.http.get<Set[]>(url);
  }
}
