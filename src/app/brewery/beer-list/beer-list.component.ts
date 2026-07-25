import { Component, inject } from '@angular/core';
import { BeerCardComponent } from '../beer-card/beer-card.component';
import { BeerService } from '../service/beer.service';
import { Beer } from '../model/beer-model';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
  imports: [BeerCardComponent, AsyncPipe],
})
export class BeerListComponent {
  private beerService = inject(BeerService);
  private router = inject(Router);
  protected beers: Beer[] = [];

  // Async Pipe
  protected beers$: Observable<Beer[]> = this.beerService.getBeers();

  ngOnInit(): void {
    // this.beerService.getBeers()
    //   .pipe(
    //     map(beers =>
    //       beers.map(beer => ({
    //         ...beer,
    //         beerName: beer.beerName.trim(),
    //       }))
    //     )
    //   )
    //   .subscribe({
    //     next: (beers) => {
    //       this.beers = beers;
    //     },
    //     error: (error) => {
    //       console.error('Error loading beers', error);
    //     },
    //   });
  }

  protected deleteBeer(beerId: number): void {
    this.beerService.deleteBeer(beerId)
      .subscribe({
        next: () => {
          console.log('Beer deleted');
          this.beers$ = this.beerService.getBeers();
        },
        error: (error) => {
          console.error('Delete error', error);
        }
      });
  }

  protected goToNewBeer(): void {
    this.router.navigate(['/beers/new']);
  }

  protected editBeer(beerId: number): void {
    this.router.navigate(['/beers', beerId, 'edit']);
  }
}