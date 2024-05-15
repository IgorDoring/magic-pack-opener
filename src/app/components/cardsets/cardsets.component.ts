import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from 'src/app/model/set';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cardsets',
  templateUrl: './cardsets.component.html',
  styleUrls: ['./cardsets.component.scss'],
})
export class CardsetsComponent {
  @Input() sets: Set[] | undefined;

  constructor(private cardService: CardService) { }

  selectSet(code: string){
    console.log(code)
  }
}
