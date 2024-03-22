  import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ui';
  showMenu: boolean = false;
  deleteModalText = '';
  deleteAlertText = '';
  addAlertText = '';
  errorAlertText = '';
  warningText = '';
  genericText = '';
  headers: HttpHeaders;
  public addModalText: string = '';
  public modalFunction: any;
  constructor() {
    this.headers = new HttpHeaders();
    this.showMenu = true;
    
  this.headers = new HttpHeaders();
  
  
  } 

     
}
