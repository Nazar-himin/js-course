//Task ONE
console.log('----------------TASK ONE----------------');

let openTab = window.open('', 'lobster', 'width=300,height=300,left=10,top=10');

setTimeout(function() {
  openTab.resizeTo(500, 500);
}, 2000);
setTimeout(function() {
  openTab.moveTo(200, 200);
}, 4000);
setTimeout(function() {
  openTab.close();
}, 6000);

// openTab.addEventListener('load', function() {
//   setTimeout(function() {
//     openTab.resizeTo(500, 500);
//   }, 2000);
//   setTimeout(function() {
//     openTab.moveTo(200, 200);
//   }, 4000);
//   setTimeout(function() {
//     openTab.close();
//   }, 6000);
// });

//Task TWO
console.log('----------------TASK TWO----------------');

let btnClick = btn;
let paragr = text;

function changeCSS() {
  changeStyle = paragr.style;
  changeStyle.color = 'orange';
  changeStyle.fontSize = '20px';
  changeStyle.fontFamily = 'Comic Sans MS';
}
btn.onclick = changeCSS;

//Task THREE
console.log('----------------TASK THREE----------------');

let blueBtn = document.getElementById('bluePage');
let pinkBtn = document.getElementById('pinkPage');
let brownBtn = document.getElementById('brownPage');
let yellowBtn = document.getElementById('yellowPage');

let mainSec = document.getElementsByTagName('main')[0];

function blueChange() {
  mainSec.style.background = '#a9e0f9';
}

function pinkChange() {
  mainSec.style.background = '#fbd6dc';
}

function brownChange() {
  mainSec.style.background = '#630e0e';
}

function brownChangeWhite() {
  mainSec.style.background = '#fff';
}

function yellowChange() {
  mainSec.style.background = '#f0f004';
}

blueBtn.addEventListener('click', blueChange);
pinkBtn.addEventListener('dblclick', pinkChange);
brownBtn.addEventListener('mousedown', brownChange);
brownBtn.addEventListener('mouseup', brownChangeWhite);
yellowBtn.addEventListener('mouseover', yellowChange);
yellowBtn.addEventListener('mouseout', brownChangeWhite);

//Task FOUR
console.log('----------------TASK FOUR----------------');

let btnDelete = document.getElementById('deleteBtn');
var option = document.getElementById('mySelect');

btnDelete.addEventListener('click', function() {
  option.remove(option.selectedIndex);
  if (option.selectedIndex === -1) {
    var opt = document.createElement('option');
    opt.classList.add('hidden_opt');
    opt.innerHTML = 'You Remove all elements!!';
    option.appendChild(opt);
  }
});

//Task FIVE
console.log('----------------TASK FIVE----------------');

let btnLive = document.querySelector('#liveBtn button');
let btnLiveText = document.getElementById('#liveBtnText');

btnLive.addEventListener('click', function liveBtnClick() {
  let createSpan = document.createElement('span');
  createSpan.innerHTML = 'I was pressed!';
  document.querySelector('#liveBtnText').prepend(createSpan);
});

btnLive.addEventListener('mouseover', function liveBtnClick() {
  let createSpan = document.createElement('span');
  createSpan.innerHTML = 'Mouse on me!';
  document.querySelector('#liveBtnText').prepend(createSpan);
});

btnLive.addEventListener('mouseout', function liveBtnClick() {
  let createSpan = document.createElement('span');
  createSpan.innerHTML = 'Mouse is not on me!';
  document.querySelector('#liveBtnText').prepend(createSpan);
});

//Task SIX
console.log('----------------TASK SIX----------------');

document.getElementById('scrSize').innerHTML =
  'Window size: width= ' +
  window.outerWidth +
  ', height= ' +
  window.outerHeight;

window.addEventListener('resize', function resizeScreen() {
  let w = window.outerWidth;
  let h = window.outerHeight;
  let screenMessage = 'Window size: width= ' + w + ', height= ' + h;
  document.getElementById('scrSize').innerHTML = screenMessage;
});

//Task SEVEN
console.log('----------------TASK  SEVEN----------------');

let cities = {
  Germany: ['Berlin', 'Hamburg', 'Bremen', 'Munich'],
  Usa: ['New York', 'Miami', 'Las Vegas', 'Los Angeles'],
  Ukraine: ['Rivne', 'Odessa', 'Kharkiv', 'Kyiv']
};

countrySelect.addEventListener('change', function() {
  citySelect.style.display = 'block';
  let citiesOptions = '';
  for (cityId in cities[countrySelect.value]) {
    citiesOptions += `<option> ${
      cities[countrySelect.value][cityId]
    }  </option>`;
  }
  citySelect.innerHTML = citiesOptions;
});

taskFive.addEventListener('change', function() {
  textSection.innerHTML = `${countrySelect.value}, ${citySelect.value}`;
});
