import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/mod';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [MatGridListModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
