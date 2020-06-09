import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/mod';
import { FeedsComponent } from './feeds.component';
import { FeedsRoutingModule } from './feeds-routing.module';

@NgModule({
  declarations: [FeedsComponent],
  imports: [FeedsRoutingModule, SharedModule]
})
export class FeedsModule {}
