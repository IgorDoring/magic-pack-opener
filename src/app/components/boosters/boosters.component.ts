import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-boosters',
  templateUrl: './boosters.component.html',
  styleUrls: ['./boosters.component.scss'],
})
export class BoostersComponent {
  @Input() cards: Card[] = [];
  toRemoveCards: {index: number, name: string}[] = [];
  @Input() hasRedrawed: boolean = false;
  @Output() cardsChanged = new EventEmitter()

  addToExclude(cardId: number) {
    if (this.toRemoveCards.length < 5)
      this.toRemoveCards.push({index: cardId, name: this.cards[cardId].name});
    this.toRemoveCards = [...new Set(this.toRemoveCards)]
  }

  confirmDelete() {
    this.toRemoveCards.forEach( card => {
        this.cards.splice(card.index, 1);
    })
    this.cardsChanged.emit(this.cards);
    this.hasRedrawed = false
  }
}
