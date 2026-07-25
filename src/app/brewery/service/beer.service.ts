import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer-model';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private readonly http = inject(HttpClient);

  private readonly BASE_URL = 'http://localhost:3000/beers';

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.BASE_URL);
  }

  getBeerById(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.BASE_URL}/${id}`);
  }

  addBeer(beer: Beer): Observable<Beer> {
  return this.http.post<Beer>(this.BASE_URL, beer);
}

  editBeer(beer: Beer): Observable<Beer> {
    return this.http.put<Beer>(`${this.BASE_URL}/${beer.beerId}`, beer);
  }

  deleteBeer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}