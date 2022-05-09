import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  // key: click, hover ...
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    // copy second to the first
    Object.assign(this.data, newData);
  }

  on(eventName: string, callback: Callback): void {
    const callbackList = this.events[eventName] || [];
    callbackList.push(callback);
    this.events[eventName] = callbackList;
  }

  trigger(eventName: string): void {
    const callbackList = this.events[eventName] || [];
    if (!callbackList || callbackList.length === 0) {
      return;
    }

    callbackList.forEach((callback) => {
      callback();
    });
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
