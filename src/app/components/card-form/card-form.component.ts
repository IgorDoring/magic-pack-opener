import { Component } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  blocks = [ "Amonkhet", "Ixalan", "Zendikar", "Ravnica", "Onslaught"] //blocos do select
}
