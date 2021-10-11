//using a variable in typescript
let hello="world"
console.log('aaa', hello)

//How to write a function in typescript
const getFullName = (firstName:string, lastName:string):string => {
   return firstName + " "+ lastName 
}
console.log(getFullName("Hello", "World"))

//CReating objects
/*
const user:UserInterface= {
   id:'1',
   name:"MIster",
   age: 29,
   getMessage() {
      return "Hello" + this.name
   }
}

const user2:UserInterface={
   id:'2',
   name:"Kate",
   age:30,
   getMessage() {
      return "Hello" + this.name
   }
}

//Interfaces help to describe entities
interface UserInterface {
   id:ID
   name:string
   age?:number //optional property
   getFullName():string
}

console.log(user.getMessage())

//Union operator
let username:string | null =null

//Type aliases
type ID = string
*/

//Avoid using any, specify all types explicitly, use unknown

//TYpe assertion
/*
let vUnknown :unknown =10;
let s2:string = vUnknown as string*/

//Working with DOM elements
/*
const someElement = document.querySelector(".foo")

someElement.addEventListener("blur", (event) as  => {
   const etarget = event.target as HTMLInputElement
   console.log("event", etarget.value)
})

console.log("someElement", someElement.value)*/

//Classes
//static properties are accessible on class itself not its instances
/*class User implements UserInterface{
   readonly firstName: string
   secondName:string

   constructor(firstName:string, lastName: string) {
      this.firstName =firstName
      this.secondName=lastName
   }
   getFullName():string {
      return this.firstName+ ' '+ this.secondName
   }
}

const user1= new User("Kelly","")

class Admin extends User {

}*/

//Generics
const addID = <T>(obj:T) => {
   const id: string= Math.random.toString()
   return {
      ...obj,
      id
   }
}

const user:UserInterface<string> ={
   name:"ALex",
   data: "some data"
}
interface UserInterface<T> {
   name: string
   data:T 
}
console.log(addID(user))

//Enumerable
enum statuses {
NotStarted, //0
InProgress, //1
Done //2
}
//we can use enum as a type