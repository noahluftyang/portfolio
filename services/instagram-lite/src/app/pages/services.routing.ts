import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExploreComponent } from '../explore/mod';
import { FeedsComponent } from '../feeds/mod';

const routes: Routes = [
  { component: FeedsComponent, path: '' },
  { component: ExploreComponent, path: 'explore' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ServicesRoutingModule {}
