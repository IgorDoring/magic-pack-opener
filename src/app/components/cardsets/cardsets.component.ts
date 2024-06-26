import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
  spinner: { startSpinner: boolean; spinnerValue: number } = {
    startSpinner: false,
    spinnerValue: 0,
  };
  error: { hasError: boolean; message: string } = {
    hasError: false,
    message: '',
  };
  redraw: boolean = false;

  constructor(
    private cardService: CardService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close');
  }

  processCards(cards: Card[]) {
    cards.forEach((card) => {
      if (card.types.find((type) => type == 'Creature')) {
        if (this.cards.length < 30) {
          this.cards.push(card);
          this.spinner!.spinnerValue += 3.33;
        } else {
          return;
        }
      }
    });
  }

  getCards(code: string) {
    this.spinner.startSpinner = true;
    this.cardService.getBooster(code).subscribe({
      next: (res) => {
        this.processCards(res.cards);
        if (this.cards.length < 30) {
          this.getCards(code);
        } else {
          this.spinner.startSpinner = false;
        }
      },
      error: (err) => {
        this.spinner.startSpinner = false;
        this.openSnackBar('Something went wrong, try another collection');
      },
    });
  }

  selectSet(code: string) {
    this.setCode = code;
    this.cards = [];
    this.spinner.spinnerValue = 0;
    this.error.hasError = false;
    this.getCards(code);
  }

  reDraw(cardsLeft: Card[]) {
    this.cards = cardsLeft;
    this.spinner.spinnerValue = cardsLeft.length * 3;
    this.redraw = true;
    this.getCards(this.setCode!);
  }
}
