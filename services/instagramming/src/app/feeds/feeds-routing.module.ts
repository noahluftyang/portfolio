import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedsComponent } from './feeds.component';

const routes: Routes = [{ component: FeedsComponent, path: '' }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class FeedsRoutingModule {}
