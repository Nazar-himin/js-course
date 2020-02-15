console.log('My last name is: Khimin');

var firstVar = 1;
var secondVar = 2;

console.log('The value of the first variable: ' + firstVar);

console.log('The value of the second variable: ' + secondVar);

var secondVar = firstVar;

console.log(
  'the value of the first variable after assigning it to the second variable: ' +
    firstVar
);

console.log(
  'The value of the second variable after assigning it the value of the first variable: ' +
    secondVar
);

var isAdult = confirm('Are You An Adult?');

if (isAdult) {
  console.log('You are an adult!');
} else {
  console.log('You are not an adult!');
}

var myName = 'Nazar';
var mySurname = 'Khimin';
var myGroup = 'lv-476';
var myBirthDay = 1995;
var familyStatus = false;
var iForgotAddValue;
var nullVar = null;

console.log('Type of year of birth is: ' + typeof myBirthDay);
console.log('Type of family status is: ' + typeof familyStatus);
console.log('Type of name, surname and group is: ' + typeof myName);
console.log('Type of null: ' + typeof nullVar);
console.log('Type of undefined: ' + typeof iForgotAddValue);

var userLogin = prompt('Enter your login', 'Jon');
var userMail = prompt('Enter your Email', 'example@gmail.com');
var userPassword = prompt('Enter your password');

alert(
  'Dear ' +
    userLogin +
    ', your email is ' +
    userMail +
    ', your password is ' +
    userPassword
);

var secondsPerHour = 60 * 60;
var secondsInDay = secondsPerHour * 24;
var thirtyOneMonth = secondsInDay * 31;
var thirtyMonth = secondsInDay * 30;
var twentyNineMonth = secondsInDay * 29;
var twentyEightMonth = secondsInDay * 28;
var secondInFullYear = secondsInDay * 365;
var secondsIntoLeapYear = secondsInDay * 366;

console.log('In one hour ' + secondsPerHour + ' seconds');
console.log('In one day ' + secondsInDay + ' seconds');
console.log(thirtyOneMonth + ' seconds in a month that has thirty-one days');
console.log(thirtyMonth + ' seconds in a month that has thirty days');
console.log(twentyNineMonth + ' seconds in a month that has twenty-nine days');
console.log(
  twentyEightMonth + ' seconds in a month that has twenty-eight days'
);
console.log('In a normal year ' + secondInFullYear + ' seconds');
console.log('In leap year ' + secondsIntoLeapYear + ' seconds');

document.querySelector('.seconds_value_hour span').innerHTML = secondsPerHour;
document.querySelector('.seconds_value_day span').innerHTML = secondsInDay;
document.querySelector('.seconds_value_31 span').innerHTML = thirtyOneMonth;
document.querySelector('.seconds_value_30 span').innerHTML = thirtyMonth;
document.querySelector('.seconds_value_29 span').innerHTML = twentyNineMonth;
document.querySelector('.seconds_value_28 span').innerHTML = twentyEightMonth;
document.querySelector('.seconds_value_year span').innerHTML = secondInFullYear;
document.querySelector(
  '.seconds_value_leap span'
).innerHTML = secondsIntoLeapYear;
