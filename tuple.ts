const login: [string, string] = ["utifmd@gmail.com", "12121212"]
console.log(login)

const register: [
    firstName: string, lastName: string, phone: number, country: string] = [
    "Utif", "Milkedori", 6281212341234, "Indonesia"
]
const [firstName, lastName, phone, country] = register
console.log(`${firstName} ${lastName}, ${phone} from ${country}`)