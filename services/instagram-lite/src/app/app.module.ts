import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ButtonComponent } from './shared/button/mod';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
})
export class AppModule {}
