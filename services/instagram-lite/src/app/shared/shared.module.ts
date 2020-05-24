import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/mod';
import { HeaderComponent } from './header/mod';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  exports: [ButtonComponent, HeaderComponent],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
