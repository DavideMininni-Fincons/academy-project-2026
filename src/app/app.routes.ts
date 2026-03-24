import { Routes } from '@angular/router';
import { BeerListComponent } from './brewery/beer-list/beer-list.component';
import { LESSON_ROUTES } from './lessons/lesson.routes';

export const routes: Routes = [
  ...LESSON_ROUTES,
  { path: 'beers', component: BeerListComponent },
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
];
