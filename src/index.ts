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