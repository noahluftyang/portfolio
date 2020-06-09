import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AccountsService, MediaService } from './services/mod';
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [CommonModule, GraphQLModule, HttpClientModule],
  providers: [AccountsService, MediaService]
})
export class CoreModule {}
