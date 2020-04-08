import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HomeComponent, ListComponent, HeaderComponent, FooterComponent, ContentComponent, WidgetsComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }
