// $('input[type=checkbox]').change(function() {
//   if ($(this).prop('checked')) {
//     $(this).attr('checked', 'checked');
//   } else {
//     $(this).removeAttr('checked');
//   }
// });

let arr = ['Tom', 'Sam', 'Ray', 'Bob'];

let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

///////////////////////////

let data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26]
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4]
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

///////////////

// function mul() {

// }

// console.log(mul(1, 'str', 2, 3, true)); // 6
// console.log(mul(null, 'str', false, true)); // 0
