import Subscription from './Subscription'

class Premium extends Subscription {
  constructor() {
    super();
    this.setType('premium')
    this.setPrice(9);
    this.setDuration(30);
    this.setAdd(false);
  }
}

export default Premium;
