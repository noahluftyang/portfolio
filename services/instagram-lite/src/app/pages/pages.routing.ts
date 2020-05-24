import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupComponent } from '../signup/mod';

const routes: Routes = [
  {
    loadChildren: () =>
      import('../accounts/accounts.module').then(
        ({ AccountsModule }) => AccountsModule
      ),
    path: 'accounts',
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
export class PagesRoutingModule {}
