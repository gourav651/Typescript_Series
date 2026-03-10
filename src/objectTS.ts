//Objects in TS

const chai = {
    name : "masala chai",
    price: 20,
    isHot: true
}

let tea:{
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "Ginger tea",
    price: 23,
    isHot: true
}

//Object definition
type Tea = {  //Type Alias
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 20,
    ingredients: ["ginger","tea leaves"]
}

type Cup = {size: string};  //This is a Type Alias in TypeScript.
                            //type creates a custom type
                            //Cup describes the shape of an object
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "400ml",material: "steel"}

smallCup = bigCup

type Brew = {brewTime: number}
const coffee = {brewTime: 5,beans: "Arabica"}
const chaiBrew:Brew = coffee

type User = {
    username: string;
    password: string
}
const u:User = {
    username: "gourav",
    password: "23"
}

//split out the data types for clarity
type Item = {name: string, quality: number}
type Address = {street: string, pin: number}

type Order = {
    id:string;
    items: Item[];
    address: Address
}

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>)=>{  //partially change (it makes all the properties optional)
    console.log("Updating chai with",updates);
}
updateChai({price:24})
updateChai({isHot:false})
updateChai({})

type ChaiOrder = {
    name?:string;  //it means if the value will exist then it will be string otherwise empty
    qunatity?:number
}
const placeOrder = (order: Required<ChaiOrder>) =>{
    console.log(order);
}
placeOrder({
    name: "Masala chai",
    qunatity:2
})

