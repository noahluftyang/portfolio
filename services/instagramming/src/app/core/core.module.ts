import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeedsService } from './services/mod';

@NgModule({
  imports: [CommonModule],
  providers: [FeedsService],
})
export class CoreModule {}
