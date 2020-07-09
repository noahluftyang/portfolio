import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './firebase.module';
import { GraphQLModule } from './graphql.module';
import { AccountService, MediaService, StorageService } from './services/mod';
import { SharedModule } from './shared/mod';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FirebaseModule,
    GraphQLModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  providers: [AccountService, MediaService, StorageService],
})
export class AppModule {}
