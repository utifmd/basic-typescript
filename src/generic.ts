function pair<S = number, T = string> (first: S, second: T): [S, T] {
    return [first, second]
}
console.log("pair fun", pair([], false));
console.log("pair fun", pair(0, "data"));


type ResponseApi<T> = {
    value: T
}
const statusCode: ResponseApi<string> = {
    value: "ok"
}
const code: ResponseApi<number> = {
    value: 200
}
console.log("response status code", statusCode.value);
console.log("response code", code.value);

class Resource<T extends string | Array<any>>{
    constructor(
        private _data: T){
    }
    
    public get() : T | null {
        return this._data
    }
    
    public set(v : T) {
        this._data = v;
    }
}
const resp = "Created successfully" // ["page 1", "page 2", "page 3"]
const resource = new Resource(resp)

switch (typeof resource.get()) {
    case "string":
        console.log("resource string")
        console.log(resource.get())
        break;

    case "object":
        console.log("resource object")
        let value = resource.get()
        if (value === null) {
            console.log("resource object is null")
            break
        }
        for (const iterator of value) {
            console.log(iterator);
        }
        break;

    default:
        break;
}