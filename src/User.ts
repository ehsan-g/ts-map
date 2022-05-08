import faker from "faker";
import { MarkerType } from "./CustomMap";

// implements help to follow the error easier to here
export class User implements MarkerType {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return "This One";
  }
}
