// Met de array drankjes kan ik zien of ik die drankje heb die je bestelt. Later kan je nog drankjes toevoegen.
let drankjes = ["fris", "bier", "wijn"];
let bestelling = {};
let kosten = {};
let totaalPrijs = 0;
let vraag;
let aantal;
let meer = true;

// Met deze constante staat alle drank prijzen vast, zodat ik later iets kan veranderen of toevoegen.
const prijzen = {
    fris: 2.50,
    bier: 3.00,
    wijn: 4.00
};

// Deze functie voegt alle dranken toe aan de object bestellingen. Als een drank al in zit wordt alleen de aantal aangepast.
function drankjeToevoegen(drankje, aantal){
    if (Object.keys(bestelling).includes(drankje)){
        bestelling[drankje] += aantal;
    } else{
        bestelling[drankje] = aantal;
        
    }   
    return bestelling;
}

// Als de loop gebroken wordt print hij de bon met deze functie. Ik kijk met een for loop naar elke drank in de object bestelling. 
// Als de aantal boven 0 is wordt hij toegevoegd aan de bon. Aan het einde wordt alles op de HTML pagina gezet.
// Hier wordt ook gelijk berekent hoeveel het kost per soort drank.
// De toFixed function zorgt ervoor dat het 2 cijfers achter de komma is.
function bon(){
    let bon = "";
    for (let drank in bestelling) {
        if (bestelling[drank] > 0) {
            let prijsSoortDrank = bestelling[drank]*prijzen[drank];
            bon += bestelling[drank] + "x " + drank + " | " + prijsSoortDrank.toFixed(2) + " euro<br>"; 
            totaalPrijs += prijsSoortDrank
        }
    }    
    document.getElementById("dranken").innerHTML = bon;
    document.getElementById("eindprijs").innerHTML = "<b>Totaal prijs: " + totaalPrijs.toFixed(2) + " euro</b>";
}
  
// Hier begint het. Hij vraagt eerst wat voor drank hij wilt en dan de aantal. Als hij stopt zegt wordt de while loop gebroken.
// Met de isFinite functie checkt hij of de variabel aantal wat hij invoert een integer is. Zo niet dan geeft hij aan dat het geen getal is.
// Als het wel een integer is dan wordt de functies drankjesToevoegen en calculatie geactiveerd.
while(meer){
    vraag = prompt("Wat wilt u bestellen? Type 'Stop' om te stoppen. ").toLowerCase()
    if (vraag == "stop"){
        meer = false;
    }else if (drankjes.includes(vraag)){
        aantal = parseInt(prompt("Hoeveel van " + vraag + " wilt u hebben?"));
        if (isFinite(aantal)){
            drankjeToevoegen(vraag, aantal);
        } else{
            alert("Dat is geen getal! ");
        }
    } else{
        alert("Die ken ik niet! ");
    }
}
// Als de while loop gebroken is dan wordt de functie bon geactiveerd. Hij print dan alles op de HTML pagina.
if (!meer){
    bon();
}