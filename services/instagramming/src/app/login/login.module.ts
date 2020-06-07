import { NgModule } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { SharedModule } from '../shared/mod';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, SharedModule],
  providers: [AccountsService]
})
export class LoginModule {}
