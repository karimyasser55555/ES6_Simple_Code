// 1.	Try the following Typescript features:
// a.	Types 
let myNumber: number = 5;
let myString: string = "Hello World";
let myBoolean: boolean = true;

// b.	union types
let myNumberOrString: number | string = 5;
myNumberOrString = "Hello World";

// c.	Function with typed arguments and return type.
function add(a: number, b: number): number {
    return a + b;
}
let result = add(5, 10);
console.log(result); // Output: 15

// d.	Enum in typescript
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Red;
console.log(myColor); // Output: 0

// e.	Interfaces & classes & inheritance
interface Animal {
    name: string;
    eat(): void;
}

class Dog implements Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    eat(): void {
        console.log(this.name + " is eating.");
    }
}

let myDog = new Dog("Fido");
myDog.eat(); // Output: Fido is eating.

// f.	Generics
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

let myArray = [1, 2, 3, 4, 5];
let reversedArray = reverse(myArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// h. Modules
// In TypeScript, modules are used to organize code into reusable units.
// A module is simply a file that contains code and exports some of its members for use by other files.
// To create a module in TypeScript, we use the export keyword to indicate which members should be visible outside of the module.

// // file: Test.ts
// // export function Add(a: number, b: number): number {
// //     return a + b;
// //   }
  
//   // file: app.ts
//   import { Add } from './Test';
//   console.log(add(2, 3)); // output: 5

//   2-Create class point2D that has x and y and then create constructor in the class and then implement method to calculate  length between two points  .
//   And calculate length as following  mathematic operation:
//    D= √(〖dx〗^2+〖dy〗^2 )
  class Point2D {
    constructor(public x: number, public y: number) {}
  
    distanceTo(other: Point2D): number {
      const dx = this.x - other.x;
      const dy = this.y - other.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  
  const point1 = new Point2D(0, 0);
  const point2 = new Point2D(3, 4);
  const distance = point1.distanceTo(point2);
  
  console.log(`The distance between (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}) is ${distance}.`);
  

//   3- Make class point3D inherit class point2D and class point3D has
//    z point and then calculate length with three points.
  class Point3D extends Point2D {
    constructor(public x: number, public y: number, public z: number) {
      super(x, y);
    }
  
    distanceTo(point: Point3D): number {
      const dx = point.x - this.x;
      const dy = point.y - this.y;
      const dz = point.z - this.z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
  }
  
  const point2D1 = new Point2D(0, 0);
  const point2D2 = new Point2D(3, 4);
  const distance2D = point2D1.distanceTo(point2D2);
  console.log("Distance 2D:", distance2D);
  
  const point3D1 = new Point3D(0, 0, 0);
  const point3D2 = new Point3D(3, 4, 5);
  const distance3D = point3D1.distanceTo(point3D2);
  console.log("Distance 3D:", distance3D);


//   4- Try  write demo that generic class can implement a generic interface.  
interface IAddition<T> {
    add: (x: T, y: T) => T;
  }
  
  class Calculator<T extends number | string> implements IAddition<T> {
    add(x: T, y: T): T {
      return <any>x + <any>y;
    }
  }
  
  const numberCalculator = new Calculator<number>();
  console.log(numberCalculator.add(1, 2)); // Output: 3
  
  const stringCalculator = new Calculator<string>();
  console.log(stringCalculator.add("Hello", "World")); // Output: HelloWorld
  
  
  