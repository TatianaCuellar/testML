import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    RouterModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'us'},
  ]
})
export class SearchResultModule { }
