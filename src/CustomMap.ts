import { User } from "./User";
import { Company } from "./Company";

// to limit functions used from google ap
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // @types/googlemaps is responsible for allowing the following
    new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMaker(company: Company) {}
}
