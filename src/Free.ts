import Subscription from './Subscription'

class Free extends Subscription {
  constructor() {
    super();
    this.setType('free')
    this.setPrice(0);
    this.setDuration(15);
    this.setAdd(true);
  }
}

export default Free;
