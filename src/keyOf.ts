type Account = {
    name: string,
    number: number
}
const accountProps = (account: Account, property: keyof Account) => {
    return `${property}\'s value of Account is ${account[property]}`
}
const account: Account = {
    name: "Utif Milkedori",
    number: 12100021
}
console.log(accountProps(account, "name"))

// keyof can also be used with index signatures to extract the index type.
type StringMap = { [key: string]: unknown } // Record<string | number, string>

function onMap(
    property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
console.log(onMap("songTitle", "Komang"));
