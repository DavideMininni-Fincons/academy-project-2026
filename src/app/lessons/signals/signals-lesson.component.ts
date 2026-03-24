import { Component, computed, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-signals-lesson',
  templateUrl: './signals-lesson.component.html',
  styleUrls: ['./signals-lesson.component.scss']
})
export class SignalsLessonComponent {
  demoLabel = input('Default input label');
  valueChanged = output<string>();

  protected count = signal(0);
  protected doubleCount = computed(() => this.count() * 2);
  protected effectLog = 'Effect not triggered yet';
  protected lastEmitted = 'No output emitted yet';

  constructor() {
    effect(() => {
      this.effectLog = `Effect run: count is now ${this.count()}`;
      console.log(this.effectLog);
    });
  }

  protected increment(): void {
    this.count.update((value) => value + 1);
  }

  protected emitOutput(): void {
    const payload = `Output payload with count=${this.count()}`;
    this.valueChanged.emit(payload);
    this.lastEmitted = payload;
  }
}
