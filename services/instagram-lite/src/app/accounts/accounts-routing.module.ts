import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/mod';
import { SignupComponent } from '../signup/mod';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'accounts/login',
  },
  {
    component: SignupComponent,
    path: 'accounts/signup',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AccountsRoutingModule {}
