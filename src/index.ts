class _Vehicle {
    constructor(
        protected readonly way: string){       
    }
}
class _Car extends _Vehicle{
    constructor(way: string){
        super(way)
    }
}
const _car = new _Car("air")
console.log(_car)

type _Person = {
    (name: string): string
}
let dataFunction: _Person = (name: string) => {
    return `Hello ${name}`
}
console.log(dataFunction("Utif Milkedori"))
console.log('type of dataFunction:', typeof dataFunction)

interface IPerson {
    address?: string
    name?: string

    getName(name: string): string
}
class _Author implements IPerson {
    address?: string
    name?: string
    
    constructor(name?: string, address?: string) {
        this.name = name
        this.address = address    
    }
    getName(name?: string): string {
        return `Hello, ${name || this.name || 'World!'} ${this.address ? 'from ' + this.address : ''}`
    }
}
const author = new _Author("UTIF", "Indonesia")
console.log("author", author.getName());

class _Member {
    constructor(
        private _name: string, 
        private _school?: string){
    }
    getName(): string {
        return this._name
    }
    getSchool(): string | undefined {
        return this._school
    }
}

let dataClass = new _Member("Utif milkedori")
console.log(dataClass.getName())
console.log('type of dataClass:', typeof dataClass)

let dataClass2 = new _Member("Utif milkedori", "STMIK INDONESIA PADANG")
console.log(dataClass2.getName())

let dataMap = new Map<String, any>()
dataMap.set("nama", "mahalini")
dataMap.set("agama", "hindu")

console.log(dataMap)
console.log('type of dataMap:', typeof dataMap)

let dataList: Array<string> = []
dataList.push("aku", "sayang", "kamu")
console.log(dataList)
console.log("type of list:", typeof dataList)

let dataPair: [string, string] = ["username", "password"]
console.log(dataPair)
console.log("type of tuple:", typeof dataPair)