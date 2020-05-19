import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './auth/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    // canActivate: [AuthGuardService],
    children: [
      // {
      //   component: ActivityComponent,
      //   path: 'activity'
      // },
      {
        component: ProfileComponent,
        path: 'profile',
      },
    ],
    component: HomeComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
