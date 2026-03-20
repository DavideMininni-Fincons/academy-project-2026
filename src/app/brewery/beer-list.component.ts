import { Component } from '@angular/core';
import { BeersData } from './model/beer-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
  imports: [DatePipe],
})
export class BeerListComponent {
  beers = BeersData;
}
