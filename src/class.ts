interface Shape {
    getArea: () => number,
    toString: () => string
}

class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(
        protected readonly width: number,
        protected readonly height: number) {
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
    /*REPLACE PARENT METHODS*/
    public override getArea(): number {
        return 14
    }
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

const square = new Square(12)
console.log(square.getArea())

abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class _Rectangle extends Polygon {
    public constructor(
        protected readonly width: number, 
        protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}
const _rectangle = new _Rectangle(10, 20)
console.log(_rectangle.getArea());
