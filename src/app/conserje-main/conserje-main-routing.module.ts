import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConserjeMainPage } from './conserje-main.page';

const routes: Routes = [
  {
    path: '',
    component: ConserjeMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConserjeMainPageRoutingModule {}
