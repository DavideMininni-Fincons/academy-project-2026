import { Component } from '@angular/core';
import { LifecycleChildComponent } from './lifecycle-child.component';

@Component({
  selector: 'app-lifecycle-lesson',
  imports: [LifecycleChildComponent],
  templateUrl: './lifecycle-lesson.component.html',
  styleUrl: './lifecycle-lesson.component.scss'
})
export class LifecycleLessonComponent {
  protected showChild = true;
  protected value = 1;

  protected increase(): void {
    this.value++;
  }
}
