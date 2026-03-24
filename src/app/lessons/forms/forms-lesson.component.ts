import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-lesson',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './forms-lesson.component.html',
  styleUrls: ['./forms-lesson.component.scss']
})
export class FormsLessonComponent {
  // --- Reactive Form ---
  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    style: ['LAGER', Validators.required],
  });

  protected reactiveSubmitted = '';

  protected submitReactive(): void {
    if (this.form.valid) {
      this.reactiveSubmitted = JSON.stringify(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  // --- Template-Driven Form ---
  protected model = {
    name: '',
    style: 'LAGER',
  };

  protected templateSubmitted = '';

  protected submitTemplate(): void {
    this.templateSubmitted = JSON.stringify(this.model);
  }
}
