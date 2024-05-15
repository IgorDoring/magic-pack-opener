import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-section',
  templateUrl: './spinner-section.component.html',
  styleUrls: ['./spinner-section.component.scss']
})
export class SpinnerSectionComponent {
  @Input() value: number = 0
}
