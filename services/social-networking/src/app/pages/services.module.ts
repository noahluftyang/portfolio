import { NgModule } from '@angular/core';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing';

@NgModule({
  declarations: [ServicesComponent],
  imports: [ServicesRoutingModule],
})
export class ServicesModule {}
