import faker from "faker";
import { MarkerType } from "./CustomMap";

export class Company implements MarkerType {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = "blue";
  }
  markerContent(): string {
    return `
    <div>
      <h6 style='color: ${this.color}'> ${this.companyName}</h6>
    </div>
    `;
  }
}
