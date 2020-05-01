import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule
    //RouterModule.forChild([]),
  ],
  exports: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent
  ],
  declarations: [ HeaderComponent, FooterComponent, SidebarComponent, FooterLayoutComponent, MainLayoutComponent ],
})
export class LayoutModule { }