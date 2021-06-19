import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SearchResultComponent} from "../search-result/search-result.component";
import {BreadcrumbsModule} from "../breadcrumbs/breadcrumbs.module";



@NgModule({
    declarations: [
        HeaderComponent,
        SearchResultComponent
    ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbsModule
  ]
})
export class HeaderModule { }
