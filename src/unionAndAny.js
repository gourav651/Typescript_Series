// union(any data type can be there which is declared string or number)
var subs = '1 Millions';
var apiRequestStatus = 'pending';
//only one of these three options can be the value
var airlineSeat = 'aisle';
airlineSeat = 'window';
var orders = ["23", "22", "67", "89"];
var allOrder; //(to avoid any data type)
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    var order = orders_1[_i];
    if (order === "22") {
        allOrder = order;
        break;
    }
    allOrder = '12';
}
console.log(allOrder);
