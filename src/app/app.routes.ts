import { Routes } from '@angular/router';
import { LESSON_ROUTES } from './lessons/lesson.routes';
import { BeerListComponent } from './brewery/beer-list/beer-list.component';

export const routes: Routes = [
  ...LESSON_ROUTES,
  { path: '', component: BeerListComponent }
];
