import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  template: `
    <div class="child-box">
      <p class="title">Lifecycle Child Component</p>
      <p class="result">
        Child value: <strong>{{ value }}</strong>
      </p>
      <p class="counter">
        ngDoCheck calls: <strong>{{ doCheckCount }}</strong>
      </p>
      <p class="hint">Open browser console to see hook order.</p>
    </div>
  `,
  styleUrl: './lifecycle-child.component.scss',
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() value = 0;
  doCheckCount = 0;

  constructor() {
    console.log('Child constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child ngOnChanges', changes['value']);
  }

  ngOnInit(): void {
    console.log('Child ngOnInit');
  }

  ngDoCheck(): void {
    this.doCheckCount++;
    console.log('Child ngDoCheck', this.doCheckCount);
  }

  ngOnDestroy(): void {
    console.log('Child ngOnDestroy');
  }
}
