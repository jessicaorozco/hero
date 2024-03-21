import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { _HeroService } from '../../../services/hero/hero.service';
import { Hero } from '../../../entity/hero/HeroModel';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AppComponent } from '../../../app.component';
import { ButtonModule } from 'primeng/button';
import { FormLoaderComponent } from '../../form-loader/form-loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, FormLoaderComponent, ProgressSpinnerModule  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent implements OnInit {
  heroes: any=[];
  showDataTable: boolean = false;
  loading: boolean=false;
  showNoRecordText: boolean = false;
  env = environment;
  isSelected: string = '';
  heroSelected: Hero[] =[];
  constructor(public app: AppComponent, private router: Router,
    private heroService: _HeroService
    ) {}

    ngOnInit(){
      this.getData();      
 }

 public addRegistry() {
  this.router.navigate(['hero-detail']);
}


public getData() {
  this.showDataTable = this.showNoRecordText = false;
  this.loading = true;

  this.heroService.getListHero().subscribe({
    next: (response) => {
      if (response && response.length > 0) {
        this.heroes = response;
        this.showDataTable = true;
      } else {
        this.showNoRecordText = true;
      }
      this.loading = false; 
    },
    error: (e) => {
      this.heroes = [];
      this.showDataTable = false;
      this.showNoRecordText = true;
      console.error(e);
      this.loading = false;
    }
  });
}


 

public editData(id: number) {
  try {
    this.router.navigate(['hero-detail', id])
  } catch (e) {
    console.error(e);
  }
}
public deleteModalData() {
  try {
    // this.app.openDeleteModal("hero(s)", () => this.deleteData());
  } catch (e) {
    console.error(e);
  }
}

public deleteData() {
  console.log(this.heroSelected);
  this.heroSelected.forEach((obj) => {
    if (obj.id != undefined) {
      this.isSelected += obj.id + ',';
    }
  })
  this.isSelected = this.isSelected.slice(0, -1);
  console.log(this.isSelected);
  this.heroService.remove(this.isSelected).subscribe(response => {
      // this.app.openDeleteAlert("hero(s)");
      // this.app.deleteModal?.toggle();
      this.getData();
  })

}
public getEventValue($event: any): string {
  return $event.target.value;
}


      
}
