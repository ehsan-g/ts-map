export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

// to limit functions used from google ap
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // @types/googlemaps is responsible for allowing the following
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // any argument that satisfy the interface
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
