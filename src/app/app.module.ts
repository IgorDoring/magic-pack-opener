import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { CardFormComponent } from './components/card-form/card-form.component';
//material modules
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const materialConponents = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
];

@NgModule({
  declarations: [AppComponent, CardFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialConponents,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
