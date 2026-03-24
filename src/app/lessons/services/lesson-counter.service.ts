import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LessonCounterService {
  private count = 0;

  increment(): number {
    this.count++;
    return this.count;
  }

  getCount(): number {
    return this.count;
  }
}
