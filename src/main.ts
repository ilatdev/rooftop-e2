import User from "./User";
import Basic from "./Basic";
import Premium from "./Premium";

const Ian = new User("Ian");
const Omega = new User("Omega", new Basic);
const Alfa = new User("Alfa", new Premium);

console.log(Ian);
console.log("################################");
console.log(Omega);
console.log("################################");
console.log(Alfa);
console.log("################################");
Ian.setSubscription(new Premium);
console.log(Ian);