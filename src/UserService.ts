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


// class Employee {
//     public name: string;
//     private salary: number;
//     protected position: string;

// constructor(name: string, salary: number, postiion: string) {
//     this.name = name;
//     this.salary = salary;
//     this.position = postiion;
// }
// // public getInfo():string {
// //     return `Имя ${this.name}, Должность: ${this.position}`;
// // }

// public getSalary():number {
//     return this.salary;
// }

// public getInfo():string {
//     return `Имя ${this.name}, Должность: ${this.position} зарплата: ${this.getSalary()}`;
// }
// }

// class Manager extends Employee {
//     constructor(name: string, salary: number, position: string) {
//         super(name, salary, position);
//     }
//     public getManagerInfo():string {
//         return `Менеджер ${this.name} имеет зарплату ${this.getSalary()}`;
//     }
// }

// const emp = new Employee('Ivan', 5000, 'Worker');
// console.log(emp.getInfo());
// console.log(emp.getSalary());

// const manager = new Manager('Alexei', 70000, 'Manager');
// console.log(manager.getManagerInfo())


// export class UserService {
//     getUserById(id: number): User {
//         return {id, name: 'John Doe'};
//     }
// }

// abstract class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }

//     makeSound(): void {
//         console.log(`${this.name}`)
//     }

//     sleep():void {
//         console.log(`${this.name} sleping...`);
//     }
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log(`${this.name}, told: Gav-gav!`);
//     }
// }

// class Cat extends Animal {
//     makeSound(): void {
//         console.log(`${this.name}, told: Mui-mui!`);
//     }
// }

// const dog = new Dog('REX');
// dog.makeSound();
// dog.sleep();

// const cat = new Cat('Murka');
// cat.makeSound();
// cat.sleep()


// abstract class Device {
//     name: string;

// constructor(name: string) {
//     this.name = name;
// }

// abstract turnOn():void;
// abstract turnOff():void
// }

// class Apple extends Device {
//     turnOn(): void {
//         console.log(`${this.name} от Apple включен...`)
//     }
//     turnOff(): void {
//         console.log(`${this.name}  от Apple выключен...`)
//     }
// }

// class Microsoft extends Device {
//     turnOn(): void {
//         console.log(`${this.name}  от Windows включен... `)
//     }
//     turnOff(): void {
//         console.log(`${this.name} от Windows выключен... `)
//     }
// }

// const phone = new Apple('Смартфон');
// phone.turnOn()
// phone.turnOff()

// const laptop = new Microsoft('Ноутбук');    
// laptop.turnOn()
// laptop.turnOff()


// class Toy {
//     makeSound() {
//         console.log('Игрушка издает звук');
//     }
// }

// class Car  extends Toy {
//     makeSound(): void {
//         console.log('Машинка: Би-би')
//     }
// }

// class Dog extends Toy {
//     makeSound(): void {
//         console.log('Кошечка: Мяу!')
//     }
// }

// class Cat extends Toy  {
//     makeSound(): void {
//         console.log('Кощечка: Мяу')
//     }
// }

// let toys: Toy[] = [new Car(), new Dog(), new Cat()]



// abstract class PaymentMethod {
//     abstract processPayment(amount: number):void;
// }

// class CardPayment extends PaymentMethod {
//     processPayment(amount: number): void {
//         console.log(`Оплата ${amount} с использованием кредитной карты выполнена.`)
//     }
// }

// class BitcoinPayment extends PaymentMethod {
//     processPayment(amount: number): void  {
//         console.log(`Оплата ${amount} с использованием биткойна выполнена.`)
//     }
// }
// class CashPayment extends PaymentMethod {
//     processPayment(amount: number) {
//         console.log(`Оплата ${amount} с использованием наличных выполнена.`)
//     }
// }

// class processPayment {
//     private paymentMethod: PaymentMethod;
    
//     constructor(paymentMethod: PaymentMethod) {
//         this.paymentMethod = paymentMethod;
//     }
//     executePayment(amount: number):void {
//         this.paymentMethod.processPayment(amount);
//     }
// }
// const creditCard = new CardPayment();
// const cash = new CashPayment();
// const bitcoin = new BitcoinPayment()

// // Оплачиваем через разные методы
// const processor1 = new processPayment(creditCard);
// processor1.executePayment(100);

// const processor2 = new processPayment(cash);
// processor2.executePayment(200);

// const processor3 = new processPayment(bitcoin);
// processor3.executePayment(300);

// interface BookInfo {
//     title: string;
//     author: string;
//     year: number;
// }
// function BookInfo(book:BookInfo):string {
//     return `Книга ${book.title} была написана ${book.author} и издана в ${book.year}.`;

// }
// const result = BookInfo({title: 'yelaman', author: 'zhanibekov', year: 21});
// console.log(result)



// abstract class Vehicle {
//    abstract start():void
//    abstract stop():void
// }

// class Car extends Vehicle {
//     start(): void {
//         console.log('Машина едет');
//     }
//     stop(): void {
//         console.log('Машина остановилась')
//     }
// }

// class Bicycle extends Vehicle {
//     start():void {
//         console.log('Велосипед едет')
//     }
//     stop(): void {
//         console.log('Велосипед остановаился')
//     }
// }

// class Boat extends Vehicle {
//     start(): void {
//         console.log('Лодка плывет');
//     }
//     stop():void {
//         console.log('Лодка остановилась')
//     }
// }

// const Auto = new Car()
// Auto.start()
// Auto.stop()

// const Linkor = new Boat();;
// Linkor.start()
// Linkor.stop()

// const BMX = new Bicycle()
// BMX.start();
// BMX.stop()


// function box <T>(item: T): T {
//     return item;
// }
// let numberBox = box(123);
// let stringBox = box('hello')
// console.log(numberBox);  // 123
// console.log(stringBox);  // hello



class ReportGenerator {
    generate(reportData:any):string {
        return JSON.stringify(reportData);
    }
}

class ReportSaver {
    save(report: string): void {
        console.log(`Saving report: ${report}`)
    }
}

const reportGenerator = new ReportGenerator();
const reportSaver = new ReportSaver()

const report = reportGenerator.generate({title: 'Report'});
reportSaver.save(report)
