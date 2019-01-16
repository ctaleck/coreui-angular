import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from 'coreui-angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; // coreui dep
import { TabsModule } from 'ngx-bootstrap/tabs'; // coreui dep

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
