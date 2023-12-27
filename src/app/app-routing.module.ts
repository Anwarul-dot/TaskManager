import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './_dashboard/dashboard/dashboard.component';
import { AboutComponent } from './_about/about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch:"full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
