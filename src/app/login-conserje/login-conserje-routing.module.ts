import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginConserjePage } from './login-conserje.page';

const routes: Routes = [
  {
    path: '',
    component: LoginConserjePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginConserjePageRoutingModule {}
