import Subscription from './Subscription'

class Basic extends Subscription {
    constructor(){
     super();
     this.setType('basic')
     this.setPrice(3)
     this.setDuration(30)
     this.setAdd(false)
    }    
 }


 export default Basic;