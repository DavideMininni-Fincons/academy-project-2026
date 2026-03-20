import { Injectable } from '@angular/core';
import { BeersData } from '../model/beer-data';
import { Beer } from '../model/beer-model';

let BeerId = 50;

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private beers = BeersData;

  getBeers(): Array<Beer> {
    return this.beers;
  }

  addBeer(beer: Beer) {
    beer.id = BeerId++;
    this.beers.push(beer);
  }

  deleteBeer(beerId: number) {
    const index = this.beers.findIndex((b) => b.id === beerId);
    if (index !== -1) {
      this.beers.splice(index, 1);
    }
  }
}
