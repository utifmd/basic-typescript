const names: string[] = []
names.push("Dylan")
names.push("Rin hermana")
names.push("Praz")
console.log("names", names)

const namesFreezed: readonly string[] = ["UTIF"]
console.log("namesFreezed", namesFreezed);

const person: {name: string, address: string} = {
    name: "Dylan",
    address: "Indonesia"
}
let i = 0
while (i < Object.keys(person).length) {
    const key = Object.keys(person)[i] as keyof typeof person
    console.log(key, person[key])
    i++
}
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}