import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable, of, map, catchError } from 'rxjs';

@Component({
  selector: 'app-rxjs-lesson',
  templateUrl: './rxjs-lesson.component.html',
  styleUrls: ['./rxjs-lesson.component.scss'],
  imports: [AsyncPipe]
})
export class RxjsLessonComponent implements OnInit {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  protected subscribeResult: number[] = [];
  protected mapResult: number[] = [];
  protected filterResult: number[] = [];
  protected errorResult = '';
  protected lazyLog = 'No subscribe -> no value received!';

  protected post$: Observable<{ id: number; title: string }> = this.httpClient.get<{ id: number; title: string }>(this.apiUrl);

  ngOnInit(): void {
    of(1, 2, 3).subscribe((v) => this.subscribeResult.push(v));

    of(1, 2, 3)
      .pipe(map((v) => v * 10))
      .subscribe((v) => this.mapResult.push(v));

    of(1)
      .pipe(
        map(() => {
          throw new Error('Oops!');
        }),
        catchError(() => {
          this.errorResult = 'Error caught with catchError';
          return of();
        }),
      )
      .subscribe();

    of(1, 2, 3);
  }
}
