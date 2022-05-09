type Callback = () => void;

export class Events {
  // key: click, hover ...
  events: { [key: string]: Callback[] } = {};

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
}
