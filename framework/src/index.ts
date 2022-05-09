import { User } from "./models/User";

const user = new User({ name: "OpenZeppelin", age: 34 });

user.set({ name: "0X", age: 34 });
console.log(user.get("name"));
console.log(user.get("age"));

user.on("change", () => {
  console.log("Changed");
});
user.on("change", () => {
  console.log("Saved");
});
user.on("mamad", () => {});

user.trigger("change");
