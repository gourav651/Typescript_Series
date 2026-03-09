let response: any = "42"

//forcefully type assertion(we tell to convert type)
let numericLength:number = (response as string).length

type Book = {
    name: string
}

//we must know our data type
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement;


let value:any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase();

let newValue: unknown
value = "chai"
value = [1,2,3]
value = 2.5

if(typeof newValue ==="string"){
    newValue.toUpperCase();
}

//try catch block
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error",error);
}

//another type
const data:unknown = "chai aur code"
const strData:string = data as string

type Role = "admin" | "user" | "superadmin"
function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Resirecting to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard")
        return
    }
    role;  //auto access the superadmin(which is left)
}

function neverReturn():never{
    while(true){}  //infinite loops(used in webservers that run when the request is received)
}