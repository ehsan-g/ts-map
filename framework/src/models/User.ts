import axios, { AxiosResponse } from "axios";
import { Events } from "./Events";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Events = new Events();
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    // copy second to the first
    Object.assign(this.data, newData);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    if (this.get("id")) {
      axios.put(`http://localhost:3000/users/${this.get("id")}`, this.data);
    }
  }
}
