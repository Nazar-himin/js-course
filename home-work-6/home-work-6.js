//Task ONE
console.log('----------------TASK ONE----------------');

let getIdMethod = (document.getElementById('test').textContent = 'Last');
console.log(
  "getElementById method: document.getElementById('test').textContent = 'Last'"
);
let idMethod = (test.innerHTML = 'Last');
console.log("id method: test.innerHTML = 'Last'");
let queryMethod = (document.querySelector('#test').innerHTML = 'Last');
console.log(
  "querySelector method: document.querySelector('#test').innerHTML = 'Last'"
);

//Task TWO
console.log('----------------TASK TWO----------------');

image.src = 'cat.jpg';
alert(document.querySelector('.change_image').innerHTML.trim());

//Task THREE
console.log('----------------TASK THREE----------------');

let paragraph = text.querySelectorAll('p');
for (let i = 0; i < paragraph.length; i++) {
  //   paragraph[i].textContent = 'Selector text ' + i + ': ' + paragraph[i].textContent;
  console.log('Selector text ' + i + ': ' + paragraph[i].textContent);
}

//Task Four
console.log('----------------TASK FOUR----------------');
alert('TASK 4 ANSWERS');
alert('First li element: ' + list.firstElementChild.textContent);
alert('Last li element: ' + list.lastElementChild.textContent);
alert(
  'Second li element: ' + list.firstElementChild.nextElementSibling.textContent
);
alert(
  'Fourth li element: ' +
    list.lastElementChild.previousElementSibling.textContent
);
alert('Third li element: ' + list.children[2].textContent);

console.log('Last li element second method: ' + list.children[4].textContent);

//Task Five
console.log('----------------TASK FIVE----------------');

let hOneStyle = document.querySelector('.fifth_task').firstElementChild.style;
hOneStyle.background = '#96ed96';
hOneStyle.fontSize = '40px';

let paragraphTags = document.querySelector('#myDiv');

paragraphTags.firstElementChild.style.fontWeight = '900';
paragraphTags.children[1].style.color = 'red';
paragraphTags.children[2].style.textDecoration = 'underline';
paragraphTags.lastElementChild.style.fontStyle = 'italic';

let customListStyle = myList.style;
customListStyle.display = 'flex';
customListStyle.listStyle = 'none';

document.querySelector('.fifth_task').lastElementChild.style.display = 'none';

//Task SIX
console.log('----------------TASK SIX----------------');

let firstInput = prompt('Enter first input content');
let secondInput = prompt('Enter second input content');

input1.value = firstInput;
input2.value = secondInput;

input1.value = secondInput;
input2.value = firstInput;

//Task SEVEN
console.log('----------------TASK SEVEN----------------');

let mainContent = document.createElement('div');
mainContent.className = 'mainClass check item';
mainContent.innerHTML = '<div id="myDiv"><p>First paragraph</p></div>';
document.querySelector('.input_section').after(mainContent);
console.log(
  'I made a div tag instead of a main tag since i already have a maine tag in the html code'
);
