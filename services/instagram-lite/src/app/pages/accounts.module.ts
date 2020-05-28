import { NgModule } from '@angular/core';

import { AccountsRoutingModule } from './accounts.routing';
import { LoginComponent } from '../login/mod';
import { SignupComponent } from '../signup/mod';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [AccountsRoutingModule],
})
export class AccountsModule {}
