import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/mod';
import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [ExploreRoutingModule, SharedModule]
})
export class ExploreModule {}
