let value: string | undefined | null = null;
value = 'hello';
value = undefined;
console.log(value)

interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}
function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}
let home: House = {
    sqft: 500
};
printYardSize(home);

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

function getValue(): string | undefined {
    return 'hello';
}
let mValue = getValue();
console.log('value length: ' + mValue!.length);