import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {HttpClientModule} from "@angular/common/http";
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        CurrencyPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    RouterModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
