import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from '../model/set';
import { HttpClient } from '@angular/common/http';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  url: string = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) {}

  getCardSet(query: string): Observable<{sets: Set[]}> {
    let url = this.url + '/sets?name=' + query;
    return this.http.get<{sets: Set[]}>(url);
  }

  getBooster(code:string): Observable<{cards: Card[]}>{
    let url = this.url + "/sets/"+code.toLowerCase()+"/booster";
    return this.http.get<{cards: Card[]}>(url);
  }
}
