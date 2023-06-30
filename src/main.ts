// Index Signature
interface Cart {
    readonly [index: string]: number

}

// interface Cart {
// apple: number
// banana: number
// grapes: number
// }

const FoodCart: Cart = {
    apple: 10,
    banana: 20,
    grapes: 30
}

let prop: string = 'apple'
// console.log(FoodCart[prop])
//Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Cart'.

// ---------------------------------------

interface Student {
    name: string
    id: number
    classes?: string[]
}

const shinchan: Student = {
    name: 'Shinchan',
    id: 1,
    classes: ['English', 'Drawing']
}

// for (let key in shinchan)
//     console.log(shinchan[key as keyof Student])

// ---------------------------------------

// interface income {
//     [key: string]: number
// }

type Streams = 'salary' | 'investment' | 'sideHustle'

type income = Record<Streams, number>

let myIncome: income = {
    salary: 100,
    investment: 200,
    sideHustle: 1000
}