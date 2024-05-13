import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConserjeMainPageRoutingModule } from './conserje-main-routing.module';

import { ConserjeMainPage } from './conserje-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConserjeMainPageRoutingModule
  ],
  declarations: [ConserjeMainPage]
})
export class ConserjeMainPageModule {}
