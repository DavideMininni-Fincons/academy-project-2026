import { Routes } from '@angular/router';
import { BeerListComponent } from './brewery/beer-list/beer-list.component';

export const routes: Routes = [
  { path: 'beers', component: BeerListComponent },
  { path: '', redirectTo: 'beers', pathMatch: 'full' }
];
