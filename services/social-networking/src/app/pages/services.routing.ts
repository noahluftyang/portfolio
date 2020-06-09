import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExploreComponent } from '../explore/mod';
import { FeedsComponent } from '../feeds/mod';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    children: [
      { component: FeedsComponent, path: '' },
      { component: ExploreComponent, path: 'explore' },
    ],
    component: ServicesComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ServicesRoutingModule {}
