import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { HeroService } from '../../../services/hero/hero.service';
import { Hero } from '../../../entity/hero/HeroModel';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  heroes: Hero[] =[];
  showDataTable: boolean = false;
  showNoRecordText: boolean = false;
  env = environment;
  isSelected: string = '';
  heroSelected: Hero[] =[];
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

    ngOnInit(): void {
      try {
        this.getData();
      } catch (e) {
        console.error(e);
      }
      
 }
 
 public getData() {
  try {
    this.showDataTable = this.showNoRecordText = false;
    this.heroService.getListHero().subscribe((response) => {
     (response.body ) ? this.heroes = response.body : this.heroes = [];  
     (this.heroes.length > 0) ? this.showDataTable = true :   this.showNoRecordText = false;
      
    });
  } catch (e) {
    console.error(e);
  }
}

public addRegistry() {
  this.router.navigate(['hero-detail']);
}

public editData(id: number) {
  try {
    this.router.navigate(['hero-detail', id])
  } catch (e) {
    console.error(e);
  }
}
// public deleteModalData() {
//   try {
//     this.app.openDeleteModal("hero(s)", () => this.deleteData());
//   } catch (e) {
//     console.error(e);
//   }
// }

// public deleteData() {
//   console.log(this.heroSelected);
//   this.heroSelected.forEach((obj) => {
//     if (obj.id != undefined) {
//       this.isSelected += obj.id + ',';
//     }
//   })
//   this.isSelected = this.isSelected.slice(0, -1);
//   console.log(this.isSelected);
//   this.heroService.delete(this.isSelected).subscribe(response => {
//       this.app.openDeleteAlert("hero(s)");
//       this.app.deleteModal?.toggle();
//       this.getData();
//   })

// }

      
}
