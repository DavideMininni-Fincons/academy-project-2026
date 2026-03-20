import { Component } from '@angular/core';
import { BeersData } from './model/beer-data';

@Component({
    selector: 'app-beer-list',
    templateUrl: './beer-list.component.html',
    styleUrl: './beer-list.component.scss',
})
export class BeerListComponent {
    beers = BeersData;
}
