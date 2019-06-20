import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@ecm-modules/core/core.module';
import {AppRoutingModule} from '@ecm-app/app-routing.module';
import {SharedModule} from '@ecm-modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
