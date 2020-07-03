import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['accounts', 'login']) },
    loadChildren: () => import('./feeds/feeds.module').then(({ FeedsModule }) => FeedsModule),
    path: '',
    pathMatch: 'full',
  },
  {
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['accounts', 'login']) },
    loadChildren: () =>
      import('./explore/explore.module').then(({ ExploreModule }) => ExploreModule),
    path: 'explore',
  },
  {
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['accounts', 'login']) },
    loadChildren: () =>
      import('./profile/profile.module').then(({ ProfileModule }) => ProfileModule),
    path: 'profile',
  },
  {
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectLoggedInTo(['/']) },
    loadChildren: () => import('./login/login.module').then(({ LoginModule }) => LoginModule),
    path: 'accounts/login',
  },
  {
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectLoggedInTo(['/']) },
    loadChildren: () => import('./signup/signup.module').then(({ SignupModule }) => SignupModule),
    path: 'accounts/signup',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
