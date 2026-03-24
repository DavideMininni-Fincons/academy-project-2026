import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lesson-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lesson-home.component.html',
  styleUrl: './lesson-home.component.scss'
})
export class LessonHomeComponent {
  protected lessons = [
    { path: '/lessons/data-binding', label: 'Data Binding' },
    { path: '/lessons/input-output', label: 'Input / Output' },
    { path: '/lessons/routing', label: 'Routing + Params' },
    { path: '/lessons/rxjs', label: 'RxJS Basics' },
    { path: '/lessons/signals', label: 'Signals Basics' },
    { path: '/lessons/di', label: 'Dependency Injection' },
    { path: '/lessons/lifecycle', label: 'Lifecycle Hooks' },
    { path: '/lessons/change-detection', label: 'Change Detection' },
    { path: '/lessons/directives', label: 'Directives' },
    { path: '/lessons/pipes', label: 'Pipes' },
    { path: '/lessons/forms', label: 'Forms' }
  ];
}
