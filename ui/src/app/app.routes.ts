import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero/hero.component';
import { ChartComponent } from './pages/chart/chart.component';
import { HeroDetailComponent } from './pages/hero/hero-detail/hero-detail.component';

export const routes: Routes = [
    { path: 'api/hero', component:HeroComponent },
    { path: 'chart', component:ChartComponent},
    { path: '', redirectTo: 'chart', pathMatch: 'full' },
    { path: 'api/hero', component:HeroDetailComponent},
    { path: 'api/hero/:id', component:HeroDetailComponent},
];
    