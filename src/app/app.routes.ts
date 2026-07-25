import { Routes } from '@angular/router';
import { LESSON_ROUTES } from './lessons/lesson.routes';
import { BeerListComponent } from './brewery/beer-list/beer-list.component';
import { NewBeerComponent } from './brewery/new-beer/new-beer.component';

export const routes: Routes = [
  ...LESSON_ROUTES,
  { path: 'beers', component: BeerListComponent },
  { path: 'beers/new', component: NewBeerComponent },
  { path: 'beers/:id/edit', component: NewBeerComponent, },
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: '**', redirectTo: 'beers' },
  // {
  //   path: 'beers',
  //   loadComponent: () =>
  //     import('./brewery/beer-list/beer-list.component')
  //       .then(c => c.BeerListComponent),
  // }
];
