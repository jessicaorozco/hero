  import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HttpHeaders } from "@angular/common/http";
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  providers: [ModalDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'ui';
  // showMenu: boolean = false;
  // deleteModalText = '';
  // deleteAlertText = '';
  // addAlertText = '';
  // errorAlertText = '';
  // warningText = '';
  // genericText = '';

  // @ViewChild('addModal') addModal!: ModalDirective;
  // @ViewChild('updateModal') updateModal!: ModalDirective;
  // @ViewChild('deleteModal') deleteModal!: ModalDirective;
  // @ViewChild('deleteAlert') deleteAlert!: ModalDirective;
  // @ViewChild('successfulAlert') successfulAlert!: ModalDirective;
  // headers: HttpHeaders;
  // public addModalText: string = '';
  // public modalFunction: any;

  // constructor(public app: AppComponent, private router: Router,
    
  // ) {
  //   this.headers = new HttpHeaders();
  //   this.showMenu = true;
    
  // this.headers = new HttpHeaders();


  // }


  // public openAddModal(message: string, modalFunction?: any): void {
  //   this.addModalText = 'Are you sure you want to create a new ' + message + '?';
  //   this.addModal.show();
  //   if (modalFunction !== undefined) {
  //     this.modalFunction = modalFunction;
  //   }
  // }

  // public openUpdateModal(modalFunction?: any): void {
  //   this.updateModal.show();
  //   if (modalFunction !== undefined) {
  //     this.modalFunction = modalFunction;
  //   }
  // }
  //   public openDeleteModal(message: string, modalFunction?: any): void {
  //     this.deleteModalText = 'Do you really want to delete the selected ' + message + '?';
  //     this.deleteModal.show();
  //     if (modalFunction !== undefined) {
  //       this.modalFunction = modalFunction;
  //     }
  //   }
  //   public openDeleteAlert(modalFunction?: any): void {
  //     this.deleteModal.show();
  //     if (modalFunction !== undefined) {
  //       this.modalFunction = modalFunction;
  //     }
  //   }
  //   public openAddAlert(modalFunction?: any): void {
  //     this.addModal.show();
  //     if (modalFunction !== undefined) {
  //       this.modalFunction = modalFunction;
  //     }
  //   }
  
       
}
