import { NgModule } from '@angular/core';

import { ServicesRoutingModule } from './services.routing';
import { ExploreComponent } from '../explore/mod';
import { FeedsComponent } from '../feeds/mod';

@NgModule({
  declarations: [ExploreComponent, FeedsComponent],
  imports: [ServicesRoutingModule],
})
export class ServicesModule {}
