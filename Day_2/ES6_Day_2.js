var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.	Try the following Typescript features:
// a.	Types 
var myNumber = 5;
var myString = "Hello World";
var myBoolean = true;
// b.	union types
var myNumberOrString = 5;
myNumberOrString = "Hello World";
// c.	Function with typed arguments and return type.
function add(a, b) {
    return a + b;
}
var result = add(5, 10);
console.log(result); // Output: 15
// d.	Enum in typescript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor); // Output: 0
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + " is eating.");
    };
    return Dog;
}());
var myDog = new Dog("Fido");
myDog.eat(); // Output: Fido is eating.
// f.	Generics
function reverse(items) {
    return items.reverse();
}
var myArray = [1, 2, 3, 4, 5];
var reversedArray = reverse(myArray);
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
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.distanceTo = function (other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Point2D;
}());
var point1 = new Point2D(0, 0);
var point2 = new Point2D(3, 4);
var distance = point1.distanceTo(point2);
console.log("The distance between (".concat(point1.x, ", ").concat(point1.y, ") and (").concat(point2.x, ", ").concat(point2.y, ") is ").concat(distance, "."));
//   3- Make class point3D inherit class point2D and class point3D has
//    z point and then calculate length with three points.
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.distanceTo = function (point) {
        var dx = point.x - this.x;
        var dy = point.y - this.y;
        var dz = point.z - this.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    return Point3D;
}(Point2D));
var point2D1 = new Point2D(0, 0);
var point2D2 = new Point2D(3, 4);
var distance2D = point2D1.distanceTo(point2D2);
console.log("Distance 2D:", distance2D);
var point3D1 = new Point3D(0, 0, 0);
var point3D2 = new Point3D(3, 4, 5);
var distance3D = point3D1.distanceTo(point3D2);
console.log("Distance 3D:", distance3D);
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    return Calculator;
}());
var numberCalculator = new Calculator();
console.log(numberCalculator.add(1, 2)); // Output: 3
var stringCalculator = new Calculator();
console.log(stringCalculator.add("Hello", "World")); // Output: HelloWorld
