import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () =>
      import('./accounts/accounts.module').then(
        ({ AccountsModule }) => AccountsModule
      ),
    path: 'accounts',
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
