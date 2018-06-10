import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ServiceEenComponent } from './service-een/service-een.component';
import { ServiceTweeComponent } from './service-twee/service-twee.component';
import { ServiceDrieComponent } from './service-drie/service-drie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceEenComponent,
    ServiceTweeComponent,
    ServiceDrieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
