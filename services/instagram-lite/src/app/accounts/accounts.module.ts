import { NgModule } from '@angular/core';

import { AccountsRoutingModule } from './accounts.routing';
import { SharedModule } from '../shared/mod';

@NgModule({
  imports: [AccountsRoutingModule, SharedModule],
})
export class AccountsModule {}
