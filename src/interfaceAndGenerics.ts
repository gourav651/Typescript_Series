// interfaces and generics
interface Chai{
    flavor: string,
    price: number,
    milk?:boolean
}

const masala: Chai = {
    flavor:"masala",
    price:12,
};

interface Discount{  //only definition of function
    (price: number):number
}
const apply50: Discount = (p)=> p* 0.5 //implementation

interface TeaMachine{
    start():void;
    stop(): void
}
const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

//merging interfaces
interface User{
    name: string
}
interface User{
    age: number
}

const u:User={
    name: "Gourav",
    age:23
}

//using extends keyword
interface A {a:string}
interface B {b:number}

interface C extends A,B {}

//Generics(Mostly used in prisma/drizzle)
function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("maslaa");
wrapInArray(34);
wrapInArray(true);

// generic inteface
interface Box<T> {
    content: T
}
const numberBox: Box<number> = {content: 12}
const numberBox2: Box<string> = {content: "sdsd"}
