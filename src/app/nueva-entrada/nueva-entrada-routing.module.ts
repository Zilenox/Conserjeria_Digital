import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaEntradaPage } from './nueva-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaEntradaPageRoutingModule {}
