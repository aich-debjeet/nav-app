import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { EChartsComponent } from './e-charts/e-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    TabComponentComponent,
    EChartsComponent,
    NavBarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    TabsModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts,
    }),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
