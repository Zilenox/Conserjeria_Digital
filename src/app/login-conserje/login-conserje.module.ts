import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginConserjePageRoutingModule } from './login-conserje-routing.module';

import { LoginConserjePage } from './login-conserje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginConserjePageRoutingModule
  ],
  declarations: [LoginConserjePage]
})
export class LoginConserjePageModule {}
