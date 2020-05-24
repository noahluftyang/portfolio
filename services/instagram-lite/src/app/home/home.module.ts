import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/mod';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
