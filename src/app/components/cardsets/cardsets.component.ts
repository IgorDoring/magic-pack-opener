import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card';
import { Set } from 'src/app/model/set';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cardsets',
  templateUrl: './cardsets.component.html',
  styleUrls: ['./cardsets.component.scss'],
})
export class CardsetsComponent {
  @Input() sets: Set[] | undefined;
  setCode: string | undefined;
  cards: Card[] = [];

  error: { hasError: boolean; message: string } | undefined;

  constructor(private cardService: CardService) {}

  processCards(cards: Card[]) {
    cards.forEach((card) => {
      if (card.types.find((type) => type == 'Creature')) {
        if (this.cards.length < 30) {
          this.cards.push(card);
        } else {
          return;
        }
      }
    });
  }

  getCards(code: string) {
    this.cardService.getBooster(code).subscribe({
      next: (res) => {
        this.processCards(res.cards);
        console.log('after req', this.cards);
        if (this.cards.length < 30) this.getCards(code);
      },
      error: (err) => {
        this.error = {
          hasError: true,
          message: 'Something went wrong, try another collection',
        };
      },
    });
  }

  selectSet(code: string) {
    this.setCode = code;
    this.getCards(code);
  }
}
