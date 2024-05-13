import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaEntradaPageRoutingModule } from './nueva-entrada-routing.module';

import { NuevaEntradaPage } from './nueva-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    NuevaEntradaPageRoutingModule
  ],
  declarations: [NuevaEntradaPage]
})
export class NuevaEntradaPageModule {}
