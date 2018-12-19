import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
