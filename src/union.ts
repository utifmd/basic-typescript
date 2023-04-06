const request = 404
const response = _operate(request)
console.log(response)

function _operate(code: string | number) {
    let output: string

    switch (typeof code) {
        case "string":        
            output = `404 not found (string)`
            break;
        case "number":
            output = `404 not found (number)`
            break;
        default:
            output = `404 not found (${typeof code})`
            break;
    }
    return output
}