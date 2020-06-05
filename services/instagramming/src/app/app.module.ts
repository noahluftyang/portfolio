import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/mod';
import { SharedModule } from './shared/mod';
import { AccountsModule } from './pages/accounts.module';
import { ServicesModule } from './pages/services.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AccountsModule,
    AppRoutingModule,
    BrowserModule,
    ServicesModule,
    SharedModule
  ]
})
export class AppModule {}
