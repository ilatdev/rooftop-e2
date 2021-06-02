import Subscription from "./Subscription";
import Free from "./Free";

class User {
  constructor(name: string, subscription?: Subscription) {
    this.setName(name);
    this.setSubscription(subscription || new Free());
  }

  private id: string = "RANDOM";
  private name: string;
  private subscription: Subscription;

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getSubscribtion() {
    return this.subscription;
  }

  setId(id: string) {
    this.id = id;
  }
  setName(name: string) {
    this.name = name;
  }
  setSubscription(subs: Subscription) {
    this.subscription = subs;
  }
}

export default User;
