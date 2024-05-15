import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Set } from 'src/app/model/set';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  blocks = ['Amonkhet', 'Ixalan', 'Zendikar', 'Ravnica', 'Onslaught']; //blocos do select
  @Output() getSets = new EventEmitter<Set[]>(); //evento para passar a os sets pro component do cardset

  constructor(private cardService: CardService) {}

  cardForm = new FormGroup({
    setName: new FormControl(''), //nome do set de carta
    block: new FormControl('', Validators.required), //bloco que o set esta
  });

  get setName() {
    return this.cardForm.get('setName');
  }

  get block() {
    return this.cardForm.get('block');
  }

  submit() {
    this.setName!.setValue(this.setName!.value!.trim());
    if (this.cardForm.valid) {
      let query = '';
      if (this.setName?.value != '') {
        query = this.setName?.value + '|';
      }
      if (this.block) {
        query += this.block?.value;
      }
      this.cardService.getCardSet(query).subscribe((res) => {
          this.getSets.emit(res.sets);
      });
    }
  }
}
