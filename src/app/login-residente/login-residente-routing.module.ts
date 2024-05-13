import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginResidentePage } from './login-residente.page';

const routes: Routes = [
  {
    path: '',
    component: LoginResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginResidentePageRoutingModule {}
