import { Component, inject } from '@angular/core';
import { BeerCardComponent } from '../beer-card/beer-card.component';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
  imports: [BeerCardComponent],
})
export class BeerListComponent {
  private beerService: BeerService = inject(BeerService);

  protected beers = this.beerService.getBeers();

  protected deleteBeer(beerId: number) {
    this.beerService.deleteBeer(beerId);
  }
}
