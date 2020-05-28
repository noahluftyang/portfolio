import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/mod';
import { SignupComponent } from '../signup/mod';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { component: LoginComponent, path: 'login' },
  { component: SignupComponent, path: 'signup' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AccountsRoutingModule {}
