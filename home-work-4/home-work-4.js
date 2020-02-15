// Home Work 4

//Task One
console.log('----------------TASK ONE----------------');

let chefCook = {
  name: 'Gordon',
  lastName: 'Ramsay',
  age: 53,
  experience: 37,
  salary: 10000
};

function propsCount(currentObject) {
  let counter = 0;
  for (let key in currentObject) {
    counter++;
  }
  console.log('Total properties: ' + counter);
}

propsCount(chefCook);

//Task Two
console.log('----------------TASK TWO----------------');

let president = new Object();
president.name = 'John';
president.lastName = 'Kennedy';
president.born = 'May 29, 1917';
president.died = 'November 22, 1963';
president.presidentialTerm = '20.01.1961 - 22.11.1963';

function showProps(obj) {
  let keysArr = [];
  keysArr.push(Object.keys(obj));
  console.log('Keys Array:');
  console.log(keysArr);

  let valueArr = [];
  valueArr.push(Object.values(obj));
  console.log('Value Array:');
  console.log(valueArr);
}

showProps(president);

//Task Three
console.log('----------------TASK THREE----------------');

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    return this.fullName + ' salary: ' + this.dayRate * this.workingDays;
  }
  #experience = 1.2;
  showSalaryWithExperience() {
    return this.fullName + ' salary: ' + this.showSalary() * this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }
  get getExp() {
    return this.#experience;
  }
  salaryWithNewExperience() {
    return this.dayRate * this.workingDays * this.#experience;
  }
}

console.log('________WORKER ONE_________');
let worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log('experience: ' + worker1.getExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log('New experience: ' + worker1.getExp);
worker1.showSalaryWithExperience();

console.log('________WORKER TWO_________');
let worker2 = new Worker('Tom Tomson', 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log('experience: ' + worker2.getExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log('New experience: ' + worker2.getExp);
worker2.showSalaryWithExperience();
console.log('________WORKER THREE_________');
let worker3 = new Worker('Andy Ander', 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log('experience: ' + worker3.getExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log('New experience: ' + worker3.getExp);
worker3.showSalaryWithExperience();
console.log('________WORKERS SALARY_________');

let arrWorkers = [
  worker1.fullName,
  worker1.salaryWithNewExperience(),
  worker2.fullName,
  worker2.salaryWithNewExperience(),
  worker3.fullName,
  worker3.salaryWithNewExperience()
];

for (let i = 1; i < arrWorkers.length - 1; i = i + 2) {
  for (let j = 1; j < arrWorkers.length - 1; j = j + 2) {
    if (arrWorkers[j] > arrWorkers[j + 2]) {
      tmp = arrWorkers[j];
      arrWorkers[j] = arrWorkers[j + 2];
      arrWorkers[j + 2] = tmp;
    }
  }
}

for (i = 0; i < arrWorkers.length - 1; i = i + 2) {
  console.log(arrWorkers[i] + ':' + arrWorkers[i + 1]);
}

//Task Four
console.log('----------------TASK FOUR----------------');

let currYear = new Date().getFullYear();

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    return super.showFullName() + ' ' + midleName;
  }
  showCourse() {
    return currYear - this.year;
  }
}

let studOne = new Student('Nazar', 'Khimin', 2015);

console.log(studOne.showFullName('Volodymyrovych'));
console.log('Current course: ' + studOne.showCourse());

//Task Five
console.log('----------------TASK FIVE----------------');

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
    // return GeometricFigure.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }
  getArea() {
    super.getArea();
    return (this.a / 2) * this.h;
  }
}

class Square extends GeometricFigure {
  constructor(b) {
    super();
    this.b = b;
  }
  getArea() {
    super.getArea();
    return this.b ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea(r) {
    super.getArea();
    return Math.PI * this.r ** 2;
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
  return figures.reduce(function(sum, figures) {
    if (figures instanceof GeometricFigure) {
      console.log(
        `Geometrick figure: ${figures.toString()} - area: ${figures.getArea()}`
      );
    }
    return sum + figures.getArea();
  }, 0);
}

console.log('Total area: ' + handleFigures(figures));
