import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { HeroService } from '../../../services/hero/hero.service';
import { Hero } from '../../../entity/hero/HeroModel';

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
    this.heroService.getListHero().subscribe((response) => {
      if (response.code == undefined) {
        this.heroes = response;
        console.log(this.heroes);
      }
      if (this.heroes.length > 0) {
        this.showDataTable = true;
      } else {
        this.showNoRecordText = false;
      }
    });
  } catch (e) {
    console.error(e);
  }
}

      
}
