"use strict";
//Basic Types
let id = 5;
let company = 'Piyush Garg';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
//Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, "Hello"];
//Tuple
let person = [1, "World", true];
// Tuple Array
let employee;
employee = [
    [1, 'Piyush'],
    [2, 'Vaibhav'],
    [3, 'John']
];
//Union
let pid = 22;
//Enum
//Define set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
//They have numbers assigned to them: 0-->1-->2-->3
//They are going to assign new values based on the first value
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// const user: {id: number, name: string} = {
//     id: 1,
//     name: 'John'
// }
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
// customerId = true
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//When the return value is not clear
function log(message) {
    console.log(message);
}
