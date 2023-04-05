const mCar: {type: string, mileAge?: number} = {
    type: "Toyota"
}
mCar.mileAge = 30_000
console.log(mCar);

const admin: {
    [key: string]: string} = {
}
admin.name = "UTIF"
admin.address = "Indonesia"

console.log(admin)