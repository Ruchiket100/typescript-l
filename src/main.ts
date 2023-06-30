// Classes
// Vissibility Modifiers 
// Public - can access from anywhere
// Private - only access is main class
// protected - can access from main and derived class also and not for intstance
// readonly - cannot change value after declaration
class Student {

    constructor(
        public name: string,
        public readonly id: number,
        private age: number,
        protected lang: string = 'English'
    ) {
        this.name = name
        this.id = id
        this.age = age
        this.lang = lang
    }

    public getLang() {
        console.log(this.lang)
    }
}


let Ruchiket = new Student('Ruchiket', 9, 19)

// console.log(Ruchiket.lang) // this cannot be accessed [protected]


// ------------------------------------------
class MusicData {
    public musics: string[]

    constructor() {
        this.musics = []
    }

    public get data(): string[] {
        return this.musics
    }
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string'))
            this.musics = value
        else throw new Error('parameter value is not array or not array of string')
    }
}

let indie = new MusicData()
indie.data = ['Bye', 'Kho Gaye', 'Khaak']
console.log(indie.data)