import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import {
  AgmJsMarkerClustererModule,
  ClusterManager
} from "@agm/js-marker-clusterer";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTvbyI3wJlaeO_LX3khAnVotS96c4cWBM'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    AgmCoreModule, AgmJsMarkerClustererModule,ToastrModule, BrowserAnimationsModule

  ]
})
export class SharedModule { }
