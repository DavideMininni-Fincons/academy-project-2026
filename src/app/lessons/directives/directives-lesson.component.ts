import { Component } from '@angular/core';
import { LessonHighlightDirective } from './lesson-highlight.directive';

@Component({
  selector: 'app-directives-lesson',
  imports: [LessonHighlightDirective],
  templateUrl: './directives-lesson.component.html',
  styleUrls: ['./directives-lesson.component.scss']
})
export class DirectivesLessonComponent {
  protected showMessage = true;

  protected toggleMessage(): void {
    this.showMessage = !this.showMessage;
  }
}
