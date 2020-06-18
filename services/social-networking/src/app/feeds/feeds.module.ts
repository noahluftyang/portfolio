import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/mod';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';

@NgModule({
  declarations: [FeedsComponent],
  imports: [FeedsRoutingModule, SharedModule],
})
export class FeedsModule {}
