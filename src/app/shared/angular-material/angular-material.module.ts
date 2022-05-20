import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import  {MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
