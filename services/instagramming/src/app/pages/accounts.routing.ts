import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../login/mod';
import { SignupComponent } from '../signup/mod';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from '../shared/mod';

const routes: Routes = [
  {
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { component: LoginComponent, path: 'login' },
      { component: SignupComponent, path: 'signup' }
    ],
    component: AccountsComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule]
})
export class AccountsRoutingModule {}
