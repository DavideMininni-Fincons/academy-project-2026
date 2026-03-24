import { Component } from '@angular/core';
import { CdChildComponent } from './cd-child.component';
import { CdChildDefaultComponent } from './cd-child-default.component';

@Component({
  selector: 'app-change-detection-lesson',
  imports: [CdChildComponent, CdChildDefaultComponent],
  templateUrl: './change-detection-lesson.component.html',
  styleUrls: ['./change-detection-lesson.component.scss']
})
export class ChangeDetectionLessonComponent {
  protected items = ['A', 'B'];

  protected mutateInPlace(): void {
    this.items.push('X');
  }

  protected immutableUpdate(): void {
    this.items = [...this.items, 'Y'];
  }
}
