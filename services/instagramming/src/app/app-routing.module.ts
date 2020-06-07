import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () =>
      import('./login/login.module').then(({ LoginModule }) => LoginModule),
    path: 'accounts/login'
  },
  {
    loadChildren: () =>
      import('./signup/signup.module').then(({ SignupModule }) => SignupModule),
    path: 'accounts/signup'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
