let cijfer = parseInt(prompt("Voer een cijfer in"));
let diamant = "";

for(let i = 0; i < cijfer; i++){
    let rij = "";
    for(let x = 1; x <= i; x++){
        rij += x + "-";
    }
    diamant += rij.slice(0, -1) + "\n";
}

for(let i = cijfer; i > 0; i--){
    let rij = "";
    for(let x = 1; x <= i; x++){
        rij += x + "-";
    }
    diamant += rij.slice(0, -1) + "\n";
}

element = document.getElementById("diamond")
element.innerText = diamant;
