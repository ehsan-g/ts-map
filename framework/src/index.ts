import { User } from "./models/User";

const user = new User({ id: 1 });

user.fetch();

user.set({ name: "0X", age: 10 });

user.save();

user.events.on("change", () => {
  console.log("Changed!");
});

user.events.trigger('change');
