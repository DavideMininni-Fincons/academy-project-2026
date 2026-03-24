import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cd-child-default',
  standalone: true,
  template: `
    <p>Default child sees items: {{ items.length }}</p>
  `
})
export class CdChildDefaultComponent {
  @Input() items: string[] = [];
}
