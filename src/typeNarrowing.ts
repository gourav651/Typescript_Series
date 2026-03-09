function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order #${size}`;
}

class Mercedes {
  speed() {
    return `330kmph`;
  }
}

class BMW {
  speed() {
    return "230kmph";
  }
}
// instanceof => used when two same name method are there in diff classes and we want a specific method to call

function speed(car: Mercedes | BMW) {
  if (car instanceof BMW) {
    //the serve() method inside of BMW wil be called
    return car.speed();
  }
  return car.speed();
}

//type definition
type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai: ${item}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala chai`;
      break;
    case "elaichi":
      return `elaichi chai`;
      break;
    case "ginger":
      return `ginger chai`;
      break;
  }
}
