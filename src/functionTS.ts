function makeChai(type: string, cups: number) {
  console.log("chai....");
}

makeChai("masala", 3);
function getChaiPrice(): number {
  //it will return number data type
  return 23;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready");
}

// function orderChai(type?:number){

// }
function orderChai(type: string = "Masala") {
  console.log("fjdhjfd");
}

// function createChai(order:{type: string;sugar:number;size: "small" | "large"}):number{
//     return 5;
// }

//the below code is same code of above just made it readable
//just passed the parameters and give definition

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 5;
}
