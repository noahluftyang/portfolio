import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/mod';
import { HeaderComponent } from './header/mod';
import { NavigationComponent } from './navigation/mod';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, NavigationComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class SharedModule {}
