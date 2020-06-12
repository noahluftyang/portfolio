import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./feeds/feeds.module').then(({ FeedsModule }) => FeedsModule),
    path: '',
  },
  {
    canActivate: [AngularFireAuthGuard],
    loadChildren: () =>
      import('./explore/explore.module').then(({ ExploreModule }) => ExploreModule),
    path: 'explore',
  },
  {
    loadChildren: () => import('./login/login.module').then(({ LoginModule }) => LoginModule),
    path: 'accounts/login',
  },
  {
    loadChildren: () => import('./signup/signup.module').then(({ SignupModule }) => SignupModule),
    path: 'accounts/signup',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
