//Task ONE
console.log('----------------TASK ONE----------------');

let arr = ['Tom', 'Sam', 'Ray', 'Bob'];

let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//Task TWO
console.log('----------------TASK TWO----------------');

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

//Task THREE
console.log('----------------TASK THREE----------------');

function mul(...arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result += arr[i];
    }
  }
  return result;
}

console.log(mul(1, 'str', 2, 3, true));
console.log(mul(null, 'str', false, true));

//Task FOUR
console.log('----------------TASK FOUR----------------');

let server = {
  data: 0,
  convertToString: function(callback) {
    callback(() => this.data + '');
  }
};
let client = {
  server: server,
  result: '',
  calc: function(data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function() {
    return callback => (this.result = callback());
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//Task FIVE
console.log('----------------TASK FIVE----------------');

// let keys = [1, 2, 3, 4, 'aaa'];
// let values = ['div', 'span', 'b', 'i', 'bbb'];
// let newArr = [];
// let thing;

// function aaa(keys, values) {
//   for (let y = 0; y < values.length; y++) {
//     thing = {};
//     for (let i = 0; i < keys.length; i++) {
//       thing[keys[i]] = values[i];
//     }
//     newArr.push(thing);
//   }
//   return thing;
// }
// aaa(keys, values);
// console.log(
//   `first array: [${keys}], second array [${values}]
// Result:`,
//   thing
// );

let keys = [1, 2, 3, 4];
let values = ['div', 'span', 'b', 'i'];

let map = new Map();

function mapBuilder(keys, values) {
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
  }
}
mapBuilder(keys, values);

console.log(
  `first array: [${keys}], second array [${values}] 
Result:`,
  map
);
console.log(map.size);
console.log(map.get(2));
