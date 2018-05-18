import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';

import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, LayoutComponent],
  exports: [NavbarComponent, SidebarComponent, FooterComponent, LayoutComponent]
})
export class LayoutModule {
}
