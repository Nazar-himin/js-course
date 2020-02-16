//Task ONE
console.log('----------------TASK  ONE----------------');

function upperCase(str) {
  let regExp = /^[A-Z]/;
  let res = regExp.test(str);

  if (res) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}

upperCase('regexp');
upperCase('RegExp');

//Task TWO
console.log('----------------TASK TWO----------------');

let askEmail = prompt('Enter email');

function checkEmail(x) {
  let expReg = /\w{1,}@\w{1,}\.\w{1,}/gi;
  console.log(expReg.test(x));
}

checkEmail(askEmail);

//Task THREE
console.log('----------------TASK THREE----------------');
let someString = /d(b+)(d)/gi.exec('cdbBdbsbz');
console.log(someString);
//Task FOUR
console.log('----------------TASK FOUR----------------');

let findSpace = / /;
let text = 'Java Script';
let result = text.split(findSpace);
console.log(`${result[1]},${result[0]}`);

//Task FIVE
console.log('----------------TASK FIVE----------------');
let cartNum = '9999-9999-9999-9999';
let cartNumTwo = '999-9999-99a9-9999';

function checkNum(num) {
  let validReg = /^\d{4}[-]\d{4}[-]\d{4}[-]\d{4}$/.test(num);
  if (validReg) {
    console.log(`All is well. Your cart number is: ${num}`);
  } else {
    console.log(`You have entered an invalid card number: ${num}`);
  }
}

checkNum(cartNum);
checkNum(cartNumTwo);

//Task SIX
console.log('----------------TASK SIX----------------');

function checkEmail(someMail) {
  let mailReg = /^[a-z0-9]\w+[-]?\w+@\w+[-]?\w+\.\w+$/gi.test(someMail);
  if (mailReg) {
    console.log('Email is correct!');
  } else {
    console.log('Email is not correct!');
  }
}

checkEmail('my-mail@gmail.com');
checkEmail('#my_mail@gmail.com');

//Task SEVEN
console.log('----------------TASK SEVEN----------------');
function checkLogin(log) {
  let pasReg = /^[a-z]([0-9a-z\.]){1,9}$/gi.test(log);
  if (pasReg) {
    console.log(`true! Your password: ${log}`);
  } else {
    console.log(`false! Your password: ${log}`);
  }

  let pasNumbers = /\d+(\.\d)?/g;
  let arr = log.match(pasNumbers);
  let sortedArr = [];
  let count = 1;
  sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sortedArr.length; i = i + count) {
    count = 1;
    for (var j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] === sortedArr[j]) {
        count++;
      }
    }
    if (count === 1) {
      console.log(sortedArr[i]);
    } else {
      console.log(`${sortedArr[i]} = ${count}(times)`);
    }
  }
}

checkLogin('ee11ret3');
checkLogin('q12w3e4rw5');
checkLogin('q1.2w3e4rw5');
checkLogin('ee1*1ret3');
checkLogin('e511ret3');
checkLogin('e3e1-1r1t3');
checkLogin('q2q1q1w1w2w3w3w3');
checkLogin('q2.1e2.2');
checkLogin('q2');
