import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero/hero.component';
import { ChartComponent } from './pages/chart/chart.component';

export const routes: Routes = [
    { path: 'api/hero', component:HeroComponent },
    { path: 'chart', component:ChartComponent},
    { path: '', redirectTo: 'chart', pathMatch: 'full' },
];
    