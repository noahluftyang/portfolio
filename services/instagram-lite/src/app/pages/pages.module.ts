import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/mod';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
