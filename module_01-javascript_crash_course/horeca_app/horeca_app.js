let objectDrankjes = {};
let vraag;
let hoeveel;
let nogEen = true;
let drankjesPrijzen = {};
let totaalPrijs;
let bonnetje = [];
let element = document.getElementById("bonnetje");


function bestellingToevoegen(drankje, aantal){
    if (Object.keys(objectDrankjes).includes(vraag)){
        objectDrankjes[drankje] += aantal;
    } else{
        objectDrankjes[drankje] = aantal;
    }
}

function totaal(object){
    let totaal = 0;

    for (let key in object) {
      totaal += object[key];
    }
    return totaal;
}

function berekening(soortDrank){
    const prijsPerFris = 5;
    const prijsPerBier = 7;
    const prijsPerWijn = 10;

    if (soortDrank in objectDrankjes === true){
        var aantal = objectDrankjes[soortDrank];
        if (soortDrank === "fris"){
            drankjesPrijzen["frisPrijs"] = prijsPerFris * aantal;
        }
        if (soortDrank === "wijn"){
            drankjesPrijzen["wijnPrijs"] = prijsPerWijn * aantal;
        }
        if (soortDrank === "bier"){
            drankjesPrijzen["bierPrijs"] = prijsPerBier * aantal;
        }
    } 

    totaalPrijs = "Totaal prijs: " + totaal(drankjesPrijzen) + " euro";
}


function bon(vraagDrank){
    let dranken;
    
    if (vraagDrank in objectDrankjes){
        for (let drank in objectDrankjes){
            dranken = objectDrankjes[drank] + "x " + vraagDrank + " " + drankjesPrijzen[drank + "Prijs"] + " euro" + "<br>"
            console.log(dranken)
        }
    

        let toevoeging = document.createElement('node');
        toevoeging.innerHTML = dranken;
        element.appendChild(toevoeging);
    }
}

function totale(){
    let prijsToevoeging = document.createElement('node');
    prijsToevoeging.innerHTML = totaalPrijs;
    element.appendChild(prijsToevoeging);
  }

while(nogEen){
    vraag = prompt("Hallo was willst du? Type 'Stop' om te stoppen ").toLowerCase();
    if (vraag === "stop"){
        nogEen = false;
    } else if (vraag === "fris" || vraag === "wijn" || vraag === "bier"){
        hoeveel = parseInt(prompt("Hoeveel " + vraag + " wilt u hebben?"));
        if (Number.isFinite(hoeveel) === false){
            alert("Dat is geen getal! ");
            continue;
        }
    bestellingToevoegen(vraag, hoeveel);  
    berekening(vraag);
    bon(vraag);
    } else {
        alert("Die ken ik niet! ");
        continue;
    }
}
if (nogEen === false){
    totale();

}