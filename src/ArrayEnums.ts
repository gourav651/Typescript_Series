//Arrays
const flavour:string[] = ["masala","chilli"]
const price:number[] = [23,34,45,56];

const rating: Array<number> = [3.8,4.7]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala",price: 15},
    {name: "adrak",price: 34}
]


//read only array(which can't be change after define)

const cities: readonly string[] = ["Delhi","Mumbai"]
// cities.push("Pune")  //can be manipulate after declare

const table: number[][]=[  //multi dimensional array
    [12,23,34],
    [34,45,5]
]

//Tuples
let chaiTuple: [string,number];
chaiTuple = ["MAsala",3];
// chaiTuple = [23,"chlli"]; //must follow the order

let userInfo: [string,number,boolean?];  //boolean is optional
userInfo = ["sss",34,true];
userInfo = ["sss",34];

//read only tuples
const location: readonly [number, number] = [23,34];

//enums  ///try to keep same data type for a enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.MEDIUM;

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)

let t:[string,number] = ["chai",121]
t.push("extra")