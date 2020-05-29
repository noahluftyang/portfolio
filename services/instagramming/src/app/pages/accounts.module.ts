import { NgModule } from '@angular/core';

import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts.routing';
import { SharedModule } from '../shared/mod';

@NgModule({
  declarations: [AccountsComponent],
  imports: [SharedModule, AccountsRoutingModule],
})
export class AccountsModule {}
