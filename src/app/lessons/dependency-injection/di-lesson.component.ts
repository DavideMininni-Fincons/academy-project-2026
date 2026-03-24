import { Component, inject } from '@angular/core';
import { LessonCounterService } from '../services/lesson-counter.service';

@Component({
  selector: 'app-di-lesson',
  templateUrl: './di-lesson.component.html',
  styleUrls: ['./di-lesson.component.scss']
})
export class DiLessonComponent {
  private counterService = inject(LessonCounterService);

  protected current = this.counterService.getCount();

  protected increment(): void {
    this.current = this.counterService.increment();
  }
}
