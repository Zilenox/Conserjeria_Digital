import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorMainPage } from './administrador-main.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorMainPageRoutingModule {}
//test cambio
