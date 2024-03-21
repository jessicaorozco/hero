import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class _HeroService {

  api = '';

  headers: HttpHeaders;
  

  constructor( private httpClient: HttpClient, private router: Router) {
    this.api = `${environment.apiUrl}/${environment.endPoints}`;
    this.headers = new HttpHeaders();
  }

  getListHero(): Observable<any> {
    console.log(this.api);
    return this.httpClient.get(`${this.api}/hero`, {headers: this.headers});
  }
  

}
