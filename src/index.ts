import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import faker from "faker";

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

console.log(user);
console.log(customMap.addMarker);
console.log(customMap.addMarker(user));
console.log(customMap.addMarker(company));
