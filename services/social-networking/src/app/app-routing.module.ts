import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: () => redirectUnauthorizedTo(['accounts', 'login']) },
    loadChildren: () => import('./feeds/feeds.module').then(({ FeedsModule }) => FeedsModule),
    path: '',
    pathMatch: 'full',
  },
  {
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: () => redirectUnauthorizedTo(['accounts', 'login']) },
    loadChildren: () =>
      import('./explore/explore.module').then(({ ExploreModule }) => ExploreModule),
    path: 'explore',
  },
  {
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: () => redirectUnauthorizedTo(['accounts', 'login']) },
    component: PostComponent,
    path: 'create',
  },
  {
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./profile/profile.module').then(({ ProfileModule }) => ProfileModule),
    path: 'profile',
  },
  {
    // canActivate: [AuthGuard],
    loadChildren: () => import('./login/login.module').then(({ LoginModule }) => LoginModule),
    path: 'accounts/login',
  },
  {
    // canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./signup/signup.module').then(({ SignupModule }) => SignupModule),
    path: 'accounts/signup',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
