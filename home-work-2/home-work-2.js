// Home Work 2

//Task One
console.log('----------------TASK ONE----------------');
var x = 1;
var y = 2;

console.log('Допишіть код, необхідно використовувати змінні x і y');
var res1 = '' + x + ('' + y);
console.log(res1 + ' //"12"');
console.log(typeof res1 + ' //"string"');

var res2 = (x == x) + ('' + y);
console.log(res2 + ' //"true2"');
console.log(typeof res2 + ' //"string"');

var res3 = x == x || y == y;
console.log(res3 + ' //"true"');
console.log(typeof res3 + ' //"boolean"');

var res4 = x + 'aa' - y;
console.log(res4 + ' //"NaN"');
console.log(typeof res4 + ' //"number"');

//Task Two
console.log('----------------TASK TWO----------------');

var askNumber;
do {
  askNumber = +prompt('Enter a number');
  if (isNaN(askNumber)) {
    alert('You haven`t entered a number, please enter a number');
  }
} while (isNaN(askNumber));

if (askNumber % 2 === 0 && askNumber > 0) {
  console.log('You entered an even, positive number');
} else if (askNumber < 0) {
  console.log('You have entered a negative number');
} else {
  console.log('You have entered an odd number or 0');
}

if (askNumber % 7 === 0) {
  console.log('You have entered a multiple of 7');
} else {
  console.log('You entered a number that is not a multiple of 7');
}

//Task Three
console.log('----------------TASK THREE----------------');

var askAdult = confirm('Are you an Adult?');
var confirmAdult;
do {
  confirmAdult = +prompt('Enter your age');
  if (isNaN(confirmAdult)) {
    alert('You haven`t entered your age, please enter your age');
  }
} while (isNaN(confirmAdult));

if (confirmAdult >= 110) {
  alert(
    'Щось мені здається, що такий старий дід не буде сидіти на даному сайті. А якщо вам справді ' +
      confirmAdult +
      ' років, то хочу сказати що ви дуже крутий дід'
  );
} else if (confirmAdult <= 0) {
  alert('Вертайтесь сюди через ' + -confirmAdult + ' років коли ви народитесь');
} else if (confirmAdult > 0 && confirmAdult < 10) {
  console.log('You are still too young');
} else if (confirmAdult >= 10 && confirmAdult < 18) {
  console.log('You are not an adult');
} else {
  console.log('You are an adult');
}

//Task Four
console.log('----------------TASK FOUR----------------');

var a;
do {
  a = +prompt('Enter the length of side A');
  if (isNaN(a) || a <= 0) {
    alert('Incorrect data!!! Please enter a positive number');
  }
} while (isNaN(a) || a <= 0);

var b;
do {
  b = +prompt('Enter the length of side B');
  if (isNaN(b) || b <= 0) {
    alert('Incorrect data!!! Please enter a positive number');
  }
} while (isNaN(b) || b <= 0);

var c;
do {
  c = +prompt('Enter the length of side C');
  if (isNaN(c) || c <= 0) {
    alert('Incorrect data!!! Please enter a positive number');
  }
} while (isNaN(c) || c <= 0);

var p = (a + b + c) / 2;

var square = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);

console.log('The square of your triangle is: ' + square.toFixed(3));

if (
  (a * b) / 2 === square ||
  (a * c) / 2 === square ||
  (b * c) / 2 === square
) {
  console.log('Your triangle is right-angled');
} else {
  console.log('Your triangle is not right-angled');
}

//Task Five
console.log('----------------TASK FIVE----------------');

var todayDate = new Date();
var currHour = todayDate.getHours();

if (currHour > 23 && currHour >= 0 && currHour <= 5) {
  console.log('Good night  // if method');
  document.querySelector('.curr_hour_greetings span').innerHTML = 'Good night';
} else if (currHour > 5 && currHour <= 11) {
  console.log('Good morning  // if method');
  document.querySelector('.curr_hour_greetings span').innerHTML =
    'Good morning';
} else if (currHour > 11 && currHour <= 17) {
  console.log('Good day  // if method');
  document.querySelector('.curr_hour_greetings span').innerHTML = 'Good day';
} else {
  console.log('Good evening // if method');
  document.querySelector('.curr_hour_greetings span').innerHTML =
    'Good evening';
}

switch (currHour) {
  case (1, 2, 3, 4, 5, 23):
    console.log('Good night // switch method');
    break;
  case (6, 7, 8, 9, 10, 11):
    console.log('Good morning // switch method');
    break;
  case (12, 13, 14, 15, 16, 17):
    console.log('Good day // switch method');
    break;
  default:
    console.log('Good evening // switch method');
}

//Task Six
console.log('----------------TASK SIX----------------');

var lobsterArr = [8, 'hello world', true, null];

document.querySelector('.count_arr span').innerHTML =
  'There are ' + lobsterArr.length + ' objects in the array';

var whatEver = prompt('Enter something');

lobsterArr.push(whatEver);

document.querySelector('.last_arr span').innerHTML =
  'The fifth element of the array is: ' + lobsterArr[4];
console.log(lobsterArr);
