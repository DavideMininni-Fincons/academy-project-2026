import { Component } from '@angular/core';
import { IoChildComponent } from './io-child.component';

@Component({
  selector: 'app-input-output-lesson',
  imports: [IoChildComponent],
  templateUrl: './input-output-lesson.component.html',
  styleUrl: './input-output-lesson.component.scss'
})
export class InputOutputLessonComponent {
  protected parentInput = 'Hello from Parent';
  protected event = 'No event yet';

  protected onOutput(message: string): void {
    this.event = message;
  }
}
