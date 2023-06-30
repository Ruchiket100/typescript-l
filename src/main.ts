// Utility Types

// Partial

interface Marks {
    studentId: number
    subject: string
    grade: number
}


// it will construct type set of properties of Marks set to optional 
const updateMarks = (marks: Marks, propsToUpdate: Partial<Marks>): Marks => {
    return { ...marks, ...propsToUpdate }
}

let StudentMarks: Marks = {
    studentId: 1,
    subject: 'math',
    grade: 100
}

console.log(updateMarks(StudentMarks, { grade: 50 }))


// Required
// all properties of type Marks are required
const changeStudent = (assign: Required<Marks>): Marks => {
    return assign
}

// Record - it construct an object with properties of Keys and values of Type
type Car = "Virtus" | "i20"
type CarSpetiality = {
    power: number
    milage: number
}

const cars: Record<Car, CarSpetiality> = {
    Virtus: { power: 120, milage: 20 },
    i20: { power: 100, milage: 25 }
}

console.log(cars.i20)


// Pick and Omit

type studentGrade = Pick<Marks, "studentId" | "grade">

const stu1Grade: studentGrade = {
    studentId: 1,
    grade: 100
}

type studentSubject = Omit<Marks, 'studentId' | 'grade'>

const stuSubject: studentSubject = {
    subject: 'math'
}

// Extract and Exclude

type moreSafer = Extract<Car, 'Virtus'>

type morePractical = Exclude<Car, 'Virtus'>

const practicalCar: morePractical = "i20"

// Nonnullable

type Names = "Jay" | 'Jack' | null | undefined

type PossibleNames = NonNullable<Names>

// ReturnType

type Book = { name: string, id: number }

const assignBook = (name: string, id: number): Book => {
    return { name, id }
}

// if we change the type of parameters, it cannot be reflect in Book
// to make it reflect we use Return Type

const assignNewBook = (name: string, id: number) => {
    return { name, id }
}

type NewAssign = ReturnType<typeof assignNewBook>

const bookName: NewAssign = assignNewBook('bookName', 1)

