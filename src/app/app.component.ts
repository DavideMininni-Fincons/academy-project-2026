import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BeerListComponent } from './brewery/beer-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, BeerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('Brewery');
}
