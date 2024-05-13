import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorMainPageRoutingModule } from './administrador-main-routing.module';

import { AdministradorMainPage } from './administrador-main.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AdministradorMainPageRoutingModule
  ],
  declarations: [AdministradorMainPage]
})
export class AdministradorMainPageModule {}
