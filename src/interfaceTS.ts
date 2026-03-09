type CarSpecs={
    type: string;
    mileage:number;
    supercar:boolean;
};

function driveCar(Specs: CarSpecs){  // when repeat same type multiple times then use this 
    console.log(Specs)
}

function Experience(Specs: CarSpecs){
    console.log(Specs);
}

//interfaces in typescript

// interface TeaRecipe{(declaration)
//      water:number;
//     milk:number;
// }

type TeaRecipe = {
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe{  //class can be also implemented from the types declaration
    water= 100;
    milk=40;
}

interface CupSize{
    size:"small" | "large"  //for this type of variables
}

class Chai implements CupSize{
    size: "small" | "large" = "large";
}

//Union(options will be there)
type TeaType = "masala" | "ginger" | "lemon"  //these are called literal types

function orderChai(t:TeaType){
    console.log(t)
}


//intersection(both will be there)
type BaseChai = {teaLeaves:number}
type Extra = {masala: number}

type MasalaChaii = BaseChai & Extra

const cup:MasalaChaii = {
    teaLeaves:2,
    masala:10
}

type User = {
    username:string;
    bio?:string  //it is optional(used by ?)
}

const u1: User = {username: "Gourav"}
const u2: User = {username: "Gourav", bio: "developer"}

type Config = {
    readonly appName: string
    version: number
}


const cfg: Config = {
    appName: "Devs.IO",
    version: 1
}