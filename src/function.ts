function pow(value: number, exponent: number = 3): number {
    return value ** exponent
}
console.log(pow(2, 4));

type DevideType = { dividend: number, divisor: number }
function divide({dividend, divisor}: DevideType) {
    return dividend / divisor
}
console.log(divide({dividend: 6, divisor: 2}))

function add(value: number, ...varArgs: number[]) {
    return value + varArgs.reduce((collector, current) => collector + current, 0)    
}
console.log(add(2, 3, 4, 5));

type NegateType = (positive: number) => number
const negate: NegateType = (positive: number) => {
    return positive * -1
}
console.log(negate(12))
