//same as other language
class Chai {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Chai("masla", 23); //object creatiom
masalaChai.flavour = "masala";

//access modifiers
class Car {
  public color: string = "pink";
  private licenseNo = "2323232";

  reveal() {
    //to access private variable(because it cant directly access)
    return this.licenseNo;
  }
}
const c = new Car();
c.reveal(); //to access the private variable through reveal()

class Model {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}
const wc = new Model();
wc.sugar = 32;

class Meone {
  static name = "gourav";
  constructor(public flavour: string) {}
}
console.log(Meone.name);
