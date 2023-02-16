let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
var autosGevraagd = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
// Berekenen hier het aantal verdiepingen

var beganeGrond = 80;
var verdieping = 120;

if (autosGevraagd < beganeGrond){
    var aantalVerdiepingen = 0;
} else if (autosGevraagd >= verdieping){
    var aantalVerdiepingen = Math.ceil((autosGevraagd-80)/120);
} else{
    var aantalVerdiepingen = "Ik heb nog geen idee hoeveel verdiepingen er moeten komen :-( ";
}

var antwoord = "Om het gewenste aantal autos kwijt te kunnen heb ik " + aantalVerdiepingen + " verdiepingen nodig.";

var element = document.getElementById("antwoord");
element.innerText = antwoord;

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik " + aantalVerdiepingen + " verdiepingen nodig.");
alert("Om het gewenste aantal autos kwijt te kunnen heb ik " + aantalVerdiepingen + " verdiepingen nodig.");