import { Component, OnInit, inject } from '@angular/core';
import { BeerService } from './http-cient-observables.service';
import { Beer } from '../../brewery/model/beer-model';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  template: '',
})
export class BeerListComponent implements OnInit {
  private beerService = inject(BeerService);
  protected beers: Beer[] = [];

  ngOnInit(): void {
    this.beerService
      .getBeers()
      .pipe(
        tap((beers) => console.log('Loaded', beers.length, 'beers')),
        catchError((err) => {
          console.error('Error:', err);
          return of([]);
        }),
      )
      .subscribe({
        next: (beers) => (this.beers = beers),
        error: (err) => console.error('Failed:', err)
      });
  }

  deleteBeer(id: number) {
    this.beerService.deleteBeer(id).subscribe({
      next: () => (this.beers = this.beers.filter((b) => b.beerId !== id))
    });
  }
}
