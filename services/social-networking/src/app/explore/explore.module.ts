import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/mod';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';

@NgModule({
  declarations: [ExploreComponent],
  imports: [ExploreRoutingModule, SharedModule],
})
export class ExploreModule {}
