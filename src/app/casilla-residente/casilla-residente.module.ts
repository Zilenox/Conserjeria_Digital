import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasillaResidentePageRoutingModule } from './casilla-residente-routing.module';

import { CasillaResidentePage } from './casilla-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasillaResidentePageRoutingModule
  ],
  declarations: [CasillaResidentePage]
})
export class CasillaResidentePageModule {}
