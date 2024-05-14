import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  blocks = [ "Amonkhet", "Ixalan", "Zendikar", "Ravnica", "Onslaught"] //blocos do select

  cardForm = new FormGroup({
    setName: new FormControl(''), //nome do set de carta
    block: new FormControl('', Validators.required), //bloco que o set esta
  })

  get setName(){
    return this.cardForm.get('setName')
  }

  get block(){
    return this.cardForm.get('block')
  }

  constructor() { }

  submit(){
    this.setName!.setValue(this.setName!.value!.trim())
    if(this.cardForm.valid){
      console.log(this.cardForm.value)
    }
  }
}
