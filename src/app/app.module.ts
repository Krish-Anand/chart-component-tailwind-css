import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { PolarChartComponent } from './chart-dashboard/polar-chart/polar-chart.component';
import { PolarSpiderComponent } from './chart-dashboard/polar-spider/polar-spider.component';
import { ForwardBackwardScatterComponent } from './chart-dashboard/forward-backward-scatter/forward-backward-scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppLayoutComponent,
    ChartDashboardComponent,
    SideBarComponent,
    PolarChartComponent,
    PolarSpiderComponent,
    ForwardBackwardScatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2HighchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
