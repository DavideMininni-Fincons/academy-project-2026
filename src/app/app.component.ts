import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BeerListComponent } from "./beer/beer-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink, BeerListComponent, BeerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('Fincons Brewery');
}
