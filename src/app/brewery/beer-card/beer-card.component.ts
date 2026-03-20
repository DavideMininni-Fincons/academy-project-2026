import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.scss',
  imports: [CurrencyPipe, DatePipe]
})
export class BeerCardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() style: string = '';
  @Input() price: number = 0;
  @Input() upc: string = '';
  @Input() lastModifiedDate: Date = new Date();

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter<number>();

  public onButtonClick() {
    this.editClick.emit();
  }

  public onDeleteClick() {
    this.deleteClick.emit(this.id);
  }
}
