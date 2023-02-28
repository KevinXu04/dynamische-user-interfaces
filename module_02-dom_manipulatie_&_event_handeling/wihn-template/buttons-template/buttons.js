let buttons = [
    {id: '1', image: 'images/bg1.jpg', cornerImage: 'images/1.jpg', value: 0},
    {id: '2', image: 'images/bg2.jpg', cornerImage: 'images/2.jpg', value: 0},
    {id: '3', image: 'images/bg3.jpg', cornerImage: 'images/3.jpg', value: 0}
]

let container = document.querySelector('.container');
let corner = document.querySelector('.corner');

buttons.forEach(function(button) {
    let buttonElement = document.getElementById(button.id);
    buttonElement.addEventListener('click', function() {
        container.style.backgroundImage = `url("${button.image}")`;
        corner.style.backgroundImage = `url("${button.cornerImage}")`;
        button.value += 1;
        updateValue(button);
  });
});

function updateValue(button){
    let valueElement = document.getElementById(button.id);
    valueElement.innerText = button.value
}

// let button1 = document.getElementById('1');
// let button2 = document.getElementById('2');
// let button3 = document.getElementById('3');

// let value1 = 0;
// let value2 = 0;
// let value3= 0;

// button1.addEventListener('click', function() {
//   container.style.backgroundImage = 'url("images/bg1.jpg")';
//   corner.style.backgroundImage = 'url("images/1.jpg")';
//   value1 += 1;
//   updateValue1();
// });

// button2.addEventListener('click', function() {
//   container.style.backgroundImage = 'url("images/bg2.jpg")';
//   corner.style.backgroundImage = 'url("images/2.jpg")';
//   value2 += 1;
//   updateValue2();
// });

// button3.addEventListener('click', function() {
//     container.style.backgroundImage = 'url("images/bg3.jpg")';
//     corner.style.backgroundImage = 'url("images/3.jpg")';
//     value3 += 1;
//     updateValue3();
// });


// function updateValue1(){
//     let valueElement = document.getElementById('1');
//     valueElement.innerText = value1;
// }
// function updateValue2(){
//     let valueElement = document.getElementById('2');
//     valueElement.innerText = value2;
// }
// function updateValue3(){
//     let valueElement = document.getElementById('3');
//     valueElement.innerText = value3;
// }
