"use strict";
let a = 'Ruchiket';
let b = 12;
let isActive;
let isLoading;
let data;
// Arrays and Objects
let artists = ['picasso', 'da vincii', 200]; // string | number
artists[0] = 23;
//tuple
let myTuple = ['ruchiket', 9, true]; // 3 elements [string, number, boolean]
let array1 = ['ruchiket', 9, true]; // array of string | number | boolean
// Object 
let obj;
let user = {
    name: 'Dev',
    id: 0
};
let guitarist1 = {
    name: 'paul',
    id: 1010
};
//function
function getGuitarist(guitarist) {
    console.log(guitarist);
}
// Enums
// enum Grade {
//     O = 1,
//     P,
//     F
// }
// literal types 
let action;
action = 'fulfilled';
// : number = return type
const add = (a, b) => {
    return a + b;
};
let multiply = function (a, b) {
    return a * b;
};
