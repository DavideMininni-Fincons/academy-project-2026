import { Component } from '@angular/core';
import { BeerCardComponent } from '../beer-card/beer-card.component';
import { BeersData } from '../model/beer-data';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
  imports: [BeerCardComponent]
})
export class BeerListComponent {
  beers = BeersData;

  protected deleteBeer(beerId: number): void {
    this.beers = this.beers.filter(beer => beer.beerId !== beerId);
  }
}
