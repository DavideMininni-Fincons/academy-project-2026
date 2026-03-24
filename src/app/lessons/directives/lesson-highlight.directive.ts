import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLessonHighlight]',
})
export class LessonHighlightDirective {
  private defaultBackground = 'transparent';
  private activeBackground = '#fff7d6';

  @HostBinding('style.backgroundColor')
  protected backgroundColor = this.defaultBackground;

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    this.backgroundColor = this.activeBackground;
  }

  @HostListener('mouseleave')
  protected onMouseLeave(): void {
    this.backgroundColor = this.defaultBackground;
  }
}
