import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from './model/set';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  querySubmitted = false;
  sets: Set[] = [];
  hasSubmitted(sets: Set[]){
    this.sets = sets;
  }
}
