// union(any data type can be there which is declared string or number)
let subs: number | string = '1 Millions' 

let apiRequestStatus: 'pending' | 'success' | 'error'= 'pending'
//only one of these three options can be the value
let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';
airlineSeat='window';

//Any
let orders = ["23","22","67","89"];
let allOrder:string | undefined;  //(to avoid any data type)

for(let order of orders){
    if(order === "22"){
        allOrder = order;
        break;
    }
    allOrder = '12';
}
console.log(allOrder);