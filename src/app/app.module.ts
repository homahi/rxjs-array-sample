import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RxjsSampleService} from './rxjs-sample.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RxjsSampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
