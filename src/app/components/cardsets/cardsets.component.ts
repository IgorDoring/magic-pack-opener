import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from 'src/app/model/set';

@Component({
  selector: 'app-cardsets',
  templateUrl: './cardsets.component.html',
  styleUrls: ['./cardsets.component.scss'],
})
export class CardsetsComponent {
  @Input() query: string = "";
}
