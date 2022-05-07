//Basic Types
let id: number = 5
let company: string = 'Piyush Garg'
let isPublished: boolean = true
let x: any = 'Hello'

let age: number
age = 30

//Arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,2, "Hello"]

//Tuple
let person: [number, string, boolean] = [1,"World",true]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Piyush'],
    [2, 'Vaibhav'],
    [3, 'John']
]

//Union
let pid: string | number = 22

//Enum
    //Define set of named constants
enum Direction1{
    Up = 1,
    Down,
    Left,
    Right
}
    //They have numbers assigned to them: 0-->1-->2-->3
    //They are going to assign new values based on the first value
console.log(Direction1.Down)

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objects
type User = {
    id: number,
    name: string
}

// const user: {id: number, name: string} = {
//     id: 1,
//     name: 'John'
// }

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid

// customerId = true
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number{
    return x + y
}

    //When the return value is not clear
function log(message: string | number): void {
    console.log(message)
}

//Interfaces
    //same as type
    //type can be used in Unions but not interface
interface UserInterface {
    //Read only properties
    readonly id: number,
    name: string
    //optional properties
    age?:number
}

const user1: UserInterface= {
id: 1,
name: "Piyush"
}

//interfaces with Function
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y: number): number => {
    return x+ y;
}

//Classes
    //Class Modifiers: private, public and protected
class Person{
    id: number
    name: string
    
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const piyush = new Person(1, "Piyush")

//Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

//Generics: Reusable Components
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad', 'piyush', 'mike'])

