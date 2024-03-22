import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../../entity/hero/HeroModel';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { _HeroService } from '../../../services/hero/hero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    power: new FormControl(''),

  });

  hero: Hero;

  submitted: boolean;
  env = environment;
  id: number;
  isHide : boolean = false;
  isShow : boolean = true;
  olderOrderBy : number;

  constructor(private route: ActivatedRoute, public app: AppComponent, private router: Router,
              private fb: FormBuilder, private service: _HeroService) {
    this.submitted = false;
    this.id = 0;
    this.olderOrderBy = 0;
    this.hero = {
      id: 0,
      name: '',
      power:''
    };

  }

  ngOnInit(): void {
        if (this.route.snapshot.params['id'] !== undefined) {
      this.id = this.route.snapshot.params['id'];
      this.getData(this.id);
    }
  }

  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public addRegistry() {
    try {
      this.router.navigate(['api/hero']);
    } catch (e) {
      console.error(e);
    }
  }

  public returnToList() {
    try {
      this.router.navigate(['api/hero']);
    } catch (e) {
      console.error(e);
    }
  }

  public saveRegistry() {
    try {
      this.submitted = true;
      if (this.form.invalid ) {
        return;
      }
            if (this.id > 0) {
        // this.app.openUpdateModal(() => this.updateData());
      } else {
       this.service.create(this.hero).subscribe(response => {
       if (response.body.code === '101') {
            // this.app.openAddAlert('hero');
            this.returnToList();
           }  else if (response.body.code === '105') {
                      // this.app.openduplicityModal();
            }  else if (response.body.code === '110') {
                //  this.app.openWarningModal('The order by already exists on the application.');
              }
        })
      }

    } catch (e) {
      console.error(e);
    }
  }

  public updateData() {
    try {
      this.service.update(this.id, this.hero).subscribe(response => {
       if (response.body.code === '104') {
          // this.app.openUpdateAlert('cancellation reason');
          // this.app.updateModal?.toggle();
          this.returnToList();
          } else if(response.body.code === '105') {
            // this.app.openduplicityModal();
          }
        })

    } catch (e) {
      console.error(e);
    }
  }


  public getData(id: number) {
    try {
      this.service.getHeroById(id).subscribe(response => {
        if (response.body != null) {
          this.hero= response.body;
        }
      })
    } catch (e) {
      console.error(e)
    }
  }


  resetForm() {
    this.submitted = false;
    this.form.reset();
  }


}
