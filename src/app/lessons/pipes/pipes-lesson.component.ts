import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-pipes-lesson',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, JsonPipe, CapitalizePipe],
  templateUrl: './pipes-lesson.component.html',
  styleUrls: ['./pipes-lesson.component.scss']
})
export class PipesLessonComponent {
  protected beerName = 'iPa';
  protected price = 5.5;
  protected today = new Date();
  protected beer = { name: 'Pils', style: 'LAGER' };
}
