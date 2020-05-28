import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/mod';
import { SharedModule } from './shared/mod';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule, SharedModule],
})
export class AppModule {}
