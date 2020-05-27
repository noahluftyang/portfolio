import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountsRoutingModule } from './accounts.routing';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/mod';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [AccountsRoutingModule, ReactiveFormsModule, SharedModule],
})
export class AccountsModule {}
