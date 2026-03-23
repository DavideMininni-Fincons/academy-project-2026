import { Component } from '@angular/core';
import { BeersData } from '../model/beer-data';
import { BeerCardComponent } from '../beer-card/beer-card.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
  imports: [BeerCardComponent]
})
export class BeerListComponent {
  beers = BeersData;

  deleteBeer(beerId: number) {
    this.beers = this.beers.filter((b) => b.beerId !== beerId);

    //alternative:
    // const index = this.beers.findIndex((b) => beerId === b.beerId);
    // this.beers.splice(index, 1);
  }
}
