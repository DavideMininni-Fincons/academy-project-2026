import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-lesson',
  imports: [FormsModule],
  templateUrl: './data-binding-lesson.component.html',
  styleUrls: ['./data-binding-lesson.component.scss']
})
export class DataBindingLessonComponent {
  protected interpolation = 'Interpolation works!';
  protected propertyBinding = 'Property binding value';
  protected twoWayBinding = '2 way binding value';
  protected clickCount = 0;

  protected increment(): void {
    this.clickCount++;
  }
}
