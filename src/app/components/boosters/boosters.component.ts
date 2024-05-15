import { Component, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-boosters',
  templateUrl: './boosters.component.html',
  styleUrls: ['./boosters.component.scss']
})
export class BoostersComponent {
  @Input() cards: Card[] = []
}
