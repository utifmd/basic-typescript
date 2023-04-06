let x: unknown = "Hello world!"
console.log((x as string).length);
console.log((<string>x).length);