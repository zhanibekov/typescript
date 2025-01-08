//1.
// let data1: any = 42;
// data: 'string';
// data: true

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




// class Vehicle {
//     make: string;
//     model: string;
//     year: number;


// constructor(make: string, model: string, year: number) {
//     this.make  = make;
//     this.model = model;
//     this.year = year;
// }

// getInfo():string {
//     return `Это марка ${this.make} и его модель ${this.model} и год производства ${this.year}`;

// }

// }

// class Car extends Vehicle {
//     door: number;

//     constructor(make: string, model: string, year: number, door: number) {
//         super(make, model, year)
//         this.door = door;
//     }

// getCarInfo():string {
//     return `${this.getInfo()} с ${this.door}`
// }
// }

// const myCar = new Car('Ford', 'Raptor', 2020, 4);
// console.log(myCar.getInfo());
// console.log(myCar.getCarInfo())


class Employee {
    public name: string;
    private salary: number;
    protected position: string;

constructor(name: string, salary: number, postiion: string) {
    this.name = name;
    this.salary = salary;
    this.position = postiion;
}
// public getInfo():string {
//     return `Имя ${this.name}, Должность: ${this.position}`;
// }

public getSalary():number {
    return this.salary;
}

public getInfo():string {
    return `Имя ${this.name}, Должность: ${this.position} зарплата: ${this.getSalary()}`;
}
}

class Manager extends Employee {
    constructor(name: string, salary: number, position: string) {
        super(name, salary, position);
    }
    public getManagerInfo():string {
        return `Менеджер ${this.name} имеет зарплату ${this.getSalary()}`;
    }
}

const emp = new Employee('Ivan', 5000, 'Worker');
console.log(emp.getInfo());
console.log(emp.getSalary());

const manager = new Manager('Alexei', 70000, 'Manager');
console.log(manager.getManagerInfo())
