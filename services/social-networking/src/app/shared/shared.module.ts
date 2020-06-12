import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/mod';
import { HeaderComponent } from './header/mod';
import { InputComponent } from './input/mod';
import { NavigationComponent } from './navigation/mod';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, InputComponent, NavigationComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}
