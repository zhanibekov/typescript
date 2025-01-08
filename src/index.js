//1.
// let data1: any = 42;
// data: 'string';
// data: true
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
// console.log(data1)
//2.
// let age: number = 25;
// let userName: string = 'Elaman';
// let isStudent: boolean = true
// console.log(age, userName, isStudent)
//3.
// const words : string = 'yelaman';
// const result = words.toUpperCase();
// console.log(result)
//4.
// const numbers: number[] = [4, 5, 6, 9, 10, -1, -2];
// const result = numbers.filter((num) => num > 0);
// console.log(result)
///5.
// class Person {
//     userName: string;
//     surName: string;
//     year: number;
// constructor(userName: string, surName: string, year: number) {
//         this.userName = userName;
//         this.surName = surName;
//         this.year = year;
// }
// getPersonInfo():string {
//     return `${this.userName} ${this.surName} ${this.year}`
// }
// }
// const myPerson = new Person('YELAMAN', 'JANIBEKOV', 2020);
// console.log(myPerson.getPersonInfo())
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getInfo = function () {
        return "".concat(this.name, ", \u0432\u043E\u0437\u0440\u0430\u0441\u0442 ").concat(this.age);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        return "".concat(this.name, ", \u0433\u043E\u0432\u043E\u0440\u0438\u0442: \u0413\u0430\u0432-\u0413\u0430\u0432!");
    };
    return Dog;
}(Animal));
var myDog = new Dog('Бобик', 3, 'Лабрадор');
console.log(myDog.bark());
