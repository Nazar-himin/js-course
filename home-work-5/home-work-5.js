// Home Work 5

//Task One
console.log('----------------TASK ONE----------------');

function testThrow(exception) {
  try {
    throw exception;
  } catch (error) {
    console.log('Caught: ' + error);
  }
}
testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));

//Task Two
console.log('----------------TASK TWO----------------');

let widthTriangle = prompt('Enter width');
let heightTriangle = prompt('Enter height');

function calcRectangleArea(w, h) {
  if (isNaN(w) || isNaN(h)) {
    throw new Error('ERROR: You did not specify a numeric value');
  } else if (w == 0 || h == 0) {
    throw new Error('ERROR: height or width cannot be 0');
  } else {
    console.log('The area of the triangle is: ' + (w / 2) * h);
  }
}

try {
  calcRectangleArea(widthTriangle, heightTriangle);
} catch (exception) {
  console.log(exception.message);
}

//Task Three
console.log('----------------TASK THREE----------------');

let userAge = prompt('Enter your age');

// if (userAge.trim() == '');

function checkAge(a) {
  if (a.trim() == '') {
    throw new Error('ERROR: The field is empty! Please enter your age');
  } else if (isNaN(a)) {
    throw new Error('ERROR: You did not specify a numeric value');
  } else if (a < 14) {
    throw new Error('ERROR: You are to young');
  } else {
    confirmAge.style.display = 'block';
  }
}

try {
  checkAge(userAge);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

//Task Four
console.log('----------------TASK FOUR----------------');

class MonthException {
  constructor(message) {
    this.message = message;
  }
}

let monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let askMonth = prompt('Enter month number');

function showMonthName(month) {
  currMonth = month - 1;
  if (month <= 12 && month > 0) {
    console.log('The curent month is: ' + monthName[currMonth - 1]);
  } else if (monthName[currMonth] === undefined) {
    throw new MonthException('Incorrect month number');
  }
}

try {
  showMonthName(askMonth);
} catch (bag) {
  console.log(bag);
  console.log(MonthException.name + ' ' + bag.message);
}
