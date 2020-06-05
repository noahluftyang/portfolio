import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/mod';
import { HeaderComponent } from './header/mod';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  exports: [ButtonComponent, HeaderComponent, ReactiveFormsModule],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule]
})
export class SharedModule {}
