import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TaskCardComponent } from './task-card/task-card.component';
import { UserRowComponent } from './user-row/user-row.component';

export const components = [
  TaskCardComponent,
  UserRowComponent
];

export const pipes = [

];

@NgModule({
  declarations: [components, pipes],
  imports: [CommonModule,FormsModule,IonicModule],
  exports: [components, pipes]
})
export class ComponentsModule {}
