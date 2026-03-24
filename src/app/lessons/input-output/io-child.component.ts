import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-io-child',
  standalone: true,
  template: `
    <div class="child-box">
      <div class="child-label">Child Component</div>
      <p>Received via <strong>@Input()</strong>: <code>{{ input }}</code></p>
      <button (click)="sendOutput()">Emit @Output()</button>
    </div>
  `
})
export class IoChildComponent {
  @Input() input = '';
  @Output() output = new EventEmitter<string>();

  protected sendOutput(): void {
    this.output.emit('Output from child component');
  }
}
