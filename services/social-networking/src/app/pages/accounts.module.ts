import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts.routing';

@NgModule({
  declarations: [AccountsComponent],
  imports: [AccountsRoutingModule, ReactiveFormsModule]
})
export class AccountsModule {}
