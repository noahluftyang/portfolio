import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/mod';
import { SignupComponent } from './signup/mod';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'accounts/login',
  },
  {
    component: SignupComponent,
    path: 'accounts/signup',
  },
  // {
  //   component: FeedsComponent,
  //   path: ''
  // },
  // {
  //   component: ExploreComponent,
  //   path: 'explore'
  // }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
