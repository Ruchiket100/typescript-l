"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Grade;
(function (Grade) {
    Grade[Grade["O"] = 1] = "O";
    Grade[Grade["P"] = 2] = "P";
    Grade[Grade["F"] = 3] = "F";
})(Grade || (Grade = {}));
console.log(Grade.O);
