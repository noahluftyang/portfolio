import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/mod';

@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
