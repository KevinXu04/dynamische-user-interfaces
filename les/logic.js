//console.log('Hello World!');

function buttonClick(event){
    //console.log("Button is clicked");
    var name = prompt("What's your name?");
    var divElement = document.getElementById("result");
    divElement.innerHTML = "Good afternoon, " +name;
}

button = document.getElementById("start");
button.onclick = buttonClick;

//array = list in python
Array 

divs = document.getElementsByTagName("div")

console.dir(divs)
//document.getElementsByClassName("result")

//console.dir(button)