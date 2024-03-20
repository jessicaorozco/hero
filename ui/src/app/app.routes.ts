import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero/hero.component';

export const routes: Routes = [
    { path: 'hero', component: HeroComponent },
    { path: '', redirectTo: 'hero', pathMatch: 'full' },
];
