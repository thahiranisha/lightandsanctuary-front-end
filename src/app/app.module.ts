import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { SharedComponent } from './shared/shared.component';
import { BeaconComponent } from './beacon/beacon.component';
import { UserComponent } from './user/user.component';
import { MediaComponent } from './media/media.component';
import { NotificationComponent } from './notification/notification.component';
import { SantuaryMapComponent } from './santuary-map/santuary-map.component';
import { LandingComponent } from './landing/landing.component';
import {LoginComponent} from "./landing/login/login.component";
import {CallbackComponent} from "./landing/callback/callback.component";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    SharedComponent,
    BeaconComponent,
    UserComponent,
    MediaComponent,
    NotificationComponent,
    SantuaryMapComponent,
    LandingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    CallbackComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
