import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cd-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>OnPush child sees items: {{ items.length }}</p>
  `
})
export class CdChildComponent {
  @Input() items: string[] = [];
}
