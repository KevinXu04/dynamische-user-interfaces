let drankjes = ["fris", "bier", "wijn"];
let bestelling = {};
let kosten = {};
let totaalPrijs = 0;
let vraag;
let aantal;
let meer = true;

const prijzen = {
    fris: 2.50,
    bier: 3.00,
    wijn: 4.00
};

function drankjeToevoegen(drankje, aantal){
    if (Object.keys(bestelling).includes(drankje)){
        bestelling[drankje] += aantal;
    } else{
        bestelling[drankje] = aantal;
        
    }
    console.log(bestelling);
    return bestelling;
}

function calculatie(soortDrank) {
    for (let drank in bestelling) {
        totaalPrijs += bestelling[drank] * prijzen[drank];
        kosten[soortDrank] = bestelling[drank] * prijzen[drank]
    }
    return totaalPrijs, kosten;
}

function bon(){

    console.log("Bon:")

    for (const drank in bestelling) {
        if (bestelling[drank] > 0) {
            let prijsSoortDrank = bestelling[drank]*prijzen[drank]
            console.log(bestelling[drank] + "x " + drank + " | " + prijsSoortDrank + " euro")
            totaalPrijs += prijsSoortDrank
        }
    }

    console.log("Totaal prijs: " + totaalPrijs + " euro")
}

while(meer){
    vraag = prompt("Wat wilt u bestellen? Type 'Stop' om te stoppen. ").toLowerCase()
    if (vraag == "stop"){
        meer = false;
    }else if (drankjes.includes(vraag)){
        aantal = parseInt(prompt("Hoeveel van " + vraag + " wilt u hebben?"));
        if (isFinite(aantal)){
            drankjeToevoegen(vraag, aantal);
            calculatie(vraag);
            console.log(kosten)
        } else{
            alert("Dat is geen getal! ");
        }
    } else{
        alert("Die ken ik niet! ");
    }
}
if (!meer){
    bon();
}