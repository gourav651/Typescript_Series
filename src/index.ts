//typescript is used for type(data type) safety

function greet(person: string):string{
    return `helo ${person}, welcome to my home`
}

const username:string = "royal home"
console.log(greet(username));