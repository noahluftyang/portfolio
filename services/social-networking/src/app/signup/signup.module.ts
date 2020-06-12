import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/mod';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [SharedModule, SignupRoutingModule],
})
export class SignupModule {}
