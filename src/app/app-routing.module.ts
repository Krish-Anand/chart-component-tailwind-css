import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '',
    component: AppLayoutComponent,
    children: [{
      path: 'dashboard', component: ChartDashboardComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
