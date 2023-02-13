let objectDrankjes = {};
let vraag;
let hoeveel;
let nogEen = true;
let drankjesPrijzen = {};
var totaalPrijs;

function bestellen(drankje, aantal) {
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
            drankjesPrijzen["fris"] = prijsPerFris * aantal;
        }
        if (soortDrank === "wijn"){
            drankjesPrijzen["wijn"] = prijsPerWijn * aantal;
        }
        if (soortDrank === "bier"){
            drankjesPrijzen["bier"] = prijsPerBier * aantal;
        }
    } 

    // if ("wijn" in objectDrankjes === true){
    //     var aantalWijn = objectDrankjes["wijn"];
    //     drankjesPrijzen["wijn"] = prijsPerWijn * aantalWijn;
    // }
    // if ("bier" in objectDrankjes === true){
    //     var aantalBier = objectDrankjes["bier"];
    //     drankjesPrijzen["bier"] = prijsPerBier * aantalBier;
    // }

    totaalPrijs = totaal(drankjesPrijzen);
}

while(nogEen){
    vraag = prompt("Hallo was willst du? Type 'Stop' om te stoppen ").toLowerCase();
    if (vraag === "stop"){
        nogEen = false;
    } else if (vraag === "fris" || vraag === "wijn" || vraag === "bier"){
        hoeveel = parseInt(prompt("Hoeveel " + vraag + " wilt u hebben?"));
        console.log(objectDrankjes);
        if (Number.isFinite(hoeveel) === false){
            alert("Dat is geen getal! ");
            continue;
        }
    bestellen(vraag, hoeveel);  
    berekening(vraag);
    } else {
        alert("Die ken ik niet! ");
    }
}



console.log(totaalPrijs)




var element = document.getElementById("bonnetje");
element.innerText = totaalPrijs;
