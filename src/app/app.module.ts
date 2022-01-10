import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsbplService} from './Service/newsbpl.service';
import { TechComponent } from './tech/tech.component';
import { BussinessComponent } from './bussiness/bussiness.component'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechComponent,
    BussinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsbplService],
  bootstrap: [AppComponent]
})
export class AppModule { }
