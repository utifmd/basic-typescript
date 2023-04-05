enum VehicleType {
    Land = "Land", Air = "Air", Sea = "Sea"
}
interface Vehicle {
    name: string,
    type: VehicleType
}

interface Car extends Vehicle {
    wheels: number
}
const car: Car = {
    name: "Mutsubishi Pajero Sport",
    wheels: 4,
    type: VehicleType.Land
}
console.log("car", car)

interface Train extends Vehicle {
    carriage: number
}
const train: Train = {
    name: "MRT Djakarta",
    carriage: 15,
    type: VehicleType.Land
}
console.log("train", train)

interface Plane extends Vehicle {
    jet: number
}
const plane: Plane = {
    name: "Garuda Indonesia (Boeing 727)",
    jet: 2,
    type: VehicleType.Air
}
console.log("plane", plane)