"use strict";
// Utility Types
// it will construct type set of properties of Marks set to optional 
const updateMarks = (marks, propsToUpdate) => {
    return Object.assign(Object.assign({}, marks), propsToUpdate);
};
let StudentMarks = {
    studentId: 1,
    subject: 'math',
    grade: 100
};
console.log(updateMarks(StudentMarks, { grade: 50 }));
// Required
// all properties of type Marks are required
const changeStudent = (assign) => {
    return assign;
};
const cars = {
    Virtus: { power: 120, milage: 20 },
    i20: { power: 100, milage: 25 }
};
console.log(cars.i20);
const stu1Grade = {
    studentId: 1,
    grade: 100
};
const stuSubject = {
    subject: 'math'
};
const practicalCar = "i20";
const assignBook = (name, id) => {
    return { name, id };
};
// if we change the type of parameters, it cannot be reflect in Book
// to make it reflect we use Return Type
const assignNewBook = (name, id) => {
    return { name, id };
};
const bookName = assignNewBook('bookName', 1);
