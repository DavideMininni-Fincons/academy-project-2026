import { Routes } from '@angular/router';
import { LessonHomeComponent } from './lessons/lesson-home.component';
import { DataBindingLessonComponent } from './lessons/data-binding/data-binding-lesson.component';
import { InputOutputLessonComponent } from './lessons/input-output/input-output-lesson.component';
import { RoutingLessonComponent } from './lessons/routing/routing-lesson.component';
import { RxjsLessonComponent } from './lessons/rxjs/rxjs-lesson.component';
import { SignalsLessonComponent } from './lessons/signals/signals-lesson.component';
import { DiLessonComponent } from './lessons/dependency-injection/di-lesson.component';
import { LifecycleLessonComponent } from './lessons/lifecycle-hooks/lifecycle-lesson.component';
import { ChangeDetectionLessonComponent } from './lessons/change-detection/change-detection-lesson.component';
import { DirectivesLessonComponent } from './lessons/directives/directives-lesson.component';
import { PipesLessonComponent } from './lessons/pipes/pipes-lesson.component';
import { FormsLessonComponent } from './lessons/forms/forms-lesson.component';

export const routes: Routes = [

  // Lessons routes
  { path: 'lessons', component: LessonHomeComponent },
  { path: 'lessons/data-binding', component: DataBindingLessonComponent },
  { path: 'lessons/input-output', component: InputOutputLessonComponent },
  { path: 'lessons/routing', component: RoutingLessonComponent },
  { path: 'lessons/routing/:type', component: RoutingLessonComponent },
  { path: 'lessons/rxjs', component: RxjsLessonComponent },
  { path: 'lessons/signals', component: SignalsLessonComponent },
  { path: 'lessons/di', component: DiLessonComponent },
  { path: 'lessons/lifecycle', component: LifecycleLessonComponent },
  { path: 'lessons/change-detection', component: ChangeDetectionLessonComponent },
  { path: 'lessons/directives', component: DirectivesLessonComponent },
  { path: 'lessons/pipes', component: PipesLessonComponent },
  { path: 'lessons/forms', component: FormsLessonComponent },

  { path: '**', redirectTo: 'beers' }
];
