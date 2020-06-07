import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/mod';
import { HeaderComponent } from './header/mod';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  exports: [
    ButtonComponent,
    HeaderComponent,
    HttpClientModule,
    ReactiveFormsModule
  ],
  imports: [CommonModule, GraphQLModule, HttpClientModule, ReactiveFormsModule]
})
export class SharedModule {}
