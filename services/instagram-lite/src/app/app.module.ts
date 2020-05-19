import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsModule } from './accounts/mod';
import { HeaderComponent } from './shared/mod';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AccountsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
