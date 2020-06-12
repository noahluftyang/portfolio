import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FirebaseModule } from './firebase.module';
import { GraphQLModule } from './graphql.module';
import { AccountsService, MediaService } from './services/mod';

@NgModule({
  imports: [FirebaseModule, GraphQLModule, HttpClientModule],
  providers: [AccountsService, MediaService],
})
export class CoreModule {}
