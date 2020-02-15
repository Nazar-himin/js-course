// Home Work 3

//Task One
console.log('----------------TASK ONE----------------');

let newArr = [2, 3, 4, 5];

function multiplicator() {
  let result = 1;
  for (let i = 0; i < newArr.length; i++) {
    result *= newArr[i];
  }
  console.log('For loop result is: ' + result);
}
multiplicator();

function multiplicatorWhile() {
  let i = 0;
  let resultWhile = 1;
  while (i in newArr) {
    resultWhile *= newArr[i];
    i++;
  }
  console.log('While loop result is: ' + resultWhile);
}
multiplicatorWhile();

//Task Two
console.log('----------------TASK TWO----------------');

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }
}

//Task Three
console.log('----------------TASK THREE----------------');

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    let min = 1;
    let max = 500;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    arr.push(rand);
  }
  console.log(arr);
}
let askNumber;
do {
  askNumber = +prompt('How many random numbers fill the array');
  if (isNaN(askNumber)) {
    alert('You haven`t entered a number, please enter a number');
  }
} while (isNaN(askNumber));
randArray(askNumber);

//Task Four
console.log('----------------TASK FOUR----------------');

let aNum;
do {
  aNum = +prompt('Enter the number A');
  if (isNaN(aNum)) {
    alert('You haven`t entered a number, please enter a number');
  }
} while (isNaN(aNum));

let bNum;
do {
  bNum = +prompt('Enter to what extent to raise the number A');
  if (isNaN(bNum)) {
    alert('You haven`t entered a number, please enter a number');
  }
} while (isNaN(bNum));

function raiseToDegree(a, b) {
  return parseInt(a) ** parseInt(b);
}

console.log(
  'You raise the number ' +
    aNum +
    ' to ' +
    bNum +
    ' degrees. You will get: ' +
    raiseToDegree(aNum, bNum)
);

//Task Five
console.log('----------------TASK FIVE----------------');

let arr = [1, 2, 3, 10, -5];
let countLastEl;
do {
  countLastEl = +prompt('How many last elements of an array you want to get');
  if (isNaN(countLastEl)) {
    alert('You haven`t entered a number, please enter a number');
  }
} while (isNaN(countLastEl));

function aaa(a, b) {
  console.log(a.slice(-b));
}

aaa(arr, countLastEl);

//Task Six
console.log('----------------TASK SIX----------------');

let str = prompt('Write the text you want to modify');
console.log('You write: ' + str);

function stringToUpper(a) {
  let splits = str.split(' ');
  let stringModify = '';

  for (let i = 0; i < splits.length; i++) {
    let firstLetter = splits[i].substring(0, 1).toUpperCase();
    let elseLetters = splits[i].substring(1, splits[i].length);
    stringModify += firstLetter + elseLetters + ' ';
  }

  console.log('Your modified text is: ' + stringModify);
}
stringToUpper(str);
