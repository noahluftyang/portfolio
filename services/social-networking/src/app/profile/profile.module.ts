import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/mod';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
