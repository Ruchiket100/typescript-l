"use strict";
// Classes
// Vissibility Modifiers 
// Public - can access from anywhere
// Private - only access is main class
// protected - can access from main and derived class also and not for intstance
// readonly - cannot change value after declaration
class Student {
    constructor(name, id, age, lang = 'English') {
        this.name = name;
        this.id = id;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.id = id;
        this.age = age;
        this.lang = lang;
    }
    getLang() {
        console.log(this.lang);
    }
}
let Ruchiket = new Student('Ruchiket', 9, 19);
// console.log(Ruchiket.lang) // this cannot be accessed [protected]
// ------------------------------------------
class MusicData {
    constructor() {
        this.musics = [];
    }
    get data() {
        return this.musics;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string'))
            this.musics = value;
        else
            throw new Error('parameter value is not array or not array of string');
    }
}
let indie = new MusicData();
indie.data = ['Bye', 'Kho Gaye', 'Khaak'];
console.log(indie.data);
