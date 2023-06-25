let a : string = 'Ruchiket';
let b : number = 12;
let isActive : number | string ;
let isLoading : boolean;
let data : any;

// Arrays and Objects
let artists = ['picasso', 'da vincii',200] // string | number
artists[0] = 23; 

//tuple
let myTuple : [string, number, boolean] = ['ruchiket', 9, true] // 3 elements [string, number, boolean]
let array1 = ['ruchiket', 9, true] // array of string | number | boolean


// Object 

let obj : object;

interface User  {
    name: string;
    id: number;
}

type Guitarist =  {
    name:string;
    id : number;
}

let user : User ={
    name: 'Dev',
    id: 0
}


let guitarist1 : Guitarist ={
    name: 'paul',
    id: 1010
}


//function
function getGuitarist (guitarist: Guitarist){
    console.log(guitarist)
}