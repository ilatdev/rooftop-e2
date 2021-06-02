class Subcription {
  private type: string;
  private duration: number;
  private price: number;
  private adds: boolean;

  getType() {
    return this.type;
  }
  getDuration() {
    return this.duration;
  }
  getPrice() {
    return this.price;
  }
  getAdd() {
    return this.adds;
  }

  setType(type: string) {
    this.type = type;
  }

  setDuration(time: number) {
    this.duration = time;
  }

  setPrice(price: number) {
    this.price = price;
  }
  setAdd(adds: boolean) {
    this.adds = adds;
  }
}

export default Subcription;
