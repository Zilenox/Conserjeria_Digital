import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginResidentePageRoutingModule } from './login-residente-routing.module';

import { LoginResidentePage } from './login-residente.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LoginResidentePageRoutingModule
  ],
  declarations: [LoginResidentePage]
})
export class LoginResidentePageModule {}
