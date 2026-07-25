import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.scss',
  imports: [CurrencyPipe, DatePipe]
})
export class BeerCardComponent {
  @Input() id: number | undefined = 0;
  @Input() name: string = '';
  @Input() style: string = '';
  @Input() price: number = 0;
  @Input() upc: string | undefined = '';
  @Input() lastModifiedDate: Date | undefined = new Date();

  @Output() deleteClick = new EventEmitter<number>();

  public onDeleteClick() {
    this.deleteClick.emit(this.id);
  }
}
