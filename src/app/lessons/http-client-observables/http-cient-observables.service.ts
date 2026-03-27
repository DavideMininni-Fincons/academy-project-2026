import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Beer } from "../../brewery/model/beer-model";

@Injectable({ providedIn: 'root' })
export class BeerService {
  private http = inject(HttpClient);
  private readonly BASE_URL = '/api/beers/';

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.BASE_URL);
  }

  addBeer(beer: Beer): Observable<Beer> {
    return this.http.post<Beer>(this.BASE_URL, beer);
  }

  editBeer(beer: Beer): Observable<Beer> {
    return this.http.put<Beer>(`${this.BASE_URL}${beer.beerId}`, beer);
  }

  deleteBeer(beerId: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}${beerId}`);
  }
}