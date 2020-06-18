import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FirebaseModule } from './firebase.module';
import { GraphQLModule } from './graphql.module';
import { AccountService, MediaService } from './services/mod';

@NgModule({
  imports: [FirebaseModule, GraphQLModule, HttpClientModule],
  providers: [AccountService, MediaService],
})
export class CoreModule {}
