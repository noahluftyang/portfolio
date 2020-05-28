import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () =>
      import('./pages/services.module').then(
        ({ ServicesModule }) => ServicesModule
      ),
    path: '',
  },
  {
    loadChildren: () =>
      import('./pages/accounts.module').then(
        ({ AccountsModule }) => AccountsModule
      ),
    path: 'accounts',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
