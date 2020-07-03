import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './firebase.module';
import { GraphQLModule } from './graphql.module';
import { AccountService, MediaService } from './services/mod';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, FirebaseModule, GraphQLModule, HttpClientModule],
  providers: [AccountService, MediaService],
})
export class AppModule {}
