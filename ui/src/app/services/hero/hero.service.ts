import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../../environments/environment';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  api = '';

  headers: HttpHeaders;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.api = `${environment.apiUrl}/${environment.endPoints}`;
    this.headers = new HttpHeaders();
  }

  getListHero(): Observable<any> {
    return this.httpClient.get(`${this.api}/`, {headers: this.headers});
  }

}
