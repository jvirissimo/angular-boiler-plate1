import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from './layout/layout.module';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ListComponent, WidgetsComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }
