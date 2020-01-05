import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // {
  //   path: "auth",
  //   loadChildren: () =>
  //     import("./components/authentication/authentication.module").then(
  //       mod => mod.AuthenticationModule
  //     )
  // },
  {path:"map" , component: MapComponent, children:[

  ]},
  {
    path: "",
    component: MapComponent
  },


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
