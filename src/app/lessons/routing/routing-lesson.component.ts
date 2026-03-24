import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routing-lesson',
  imports: [RouterLink],
  templateUrl: './routing-lesson.component.html',
  styleUrls: ['./routing-lesson.component.scss']
})
export class RoutingLessonComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private sub!: Subscription;

  protected type = 'none';
  protected queryType = 'none';

  // N.B. with input, it requires withComponentInputBinding() in app.config.ts) => provideRouter(routes, withComponentInputBinding())
  // @Input() type!: string;
  // @Input() queryType!: string;

  ngOnInit(): void {
    this.sub = new Subscription();

    this.sub.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.type = params.get('type') ?? 'none';
      })
    );

    this.sub.add(
      this.activatedRoute.queryParamMap.subscribe((params) => {
        this.queryType = params.get('queryType') ?? 'none';
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  protected goToPathParamsRouting(): void {
    void this.router.navigate(['/lessons/routing', 'via-typescript']);
  }

  protected goToQueryParamsRouting(): void {
    void this.router.navigate(['/lessons/routing'], { queryParams: { queryType: 'via-typescript' } });
  }
}
