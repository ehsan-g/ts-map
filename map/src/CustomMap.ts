export interface MarkerType {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
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
  addMarker(markerType: MarkerType): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerType.location.lat,
        lng: markerType.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerType.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
