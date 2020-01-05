import { MapService } from './../../core/map.service';
import { Component, OnInit } from '@angular/core';
import { ClusterStyle } from "@agm/js-marker-clusterer/services/google-clusterer-types";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 26.8206;
  lng: number = 30.8025;
  public data = {
    latitude: "30.044482654785146",
    longitude: "31.235799312591553",
    type: "clinics",
    lang: "en"
  }
  dataPlaces: any;
  clusterStyles: ClusterStyle[] = [
    {
      textColor: "#fff",
      url: "./assets/map/2.png",
      height: 50,
      width: 58,
      textSize: 15
    }
  ];
  constructor(private mapService: MapService, private toastr: ToastrService) { }

  ngOnInit() {
    this.mapService.getMarkers(this.data)
      .subscribe({
        next: (response: any) => {
          this.dataPlaces = response.places
          console.log(response)
        },
        error: () => {
          console.log('error')
        },
        complete: () => {
          console.log('complete')
        }

      })
  }
  clusterClick() {
    window.dispatchEvent(new Event("resize"));

  }
  showDetails(map) {
    console.log(map);
    this.toastr.success(map.formatted_address);

  }

}
