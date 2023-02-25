let aantalPoten = 0;
function berekenPoten(giraf, struisvogel, zebra){
    return aantalPoten = giraf*4 + struisvogel*2 + zebra*4;
}

let giraf = parseInt(prompt("Aantal giraffen:"));
let struisvogel = parseInt(prompt("Aantal struisvogels:"));
let zebra = parseInt(prompt("Aantal zebra:"));
console.log(berekenPoten(giraf, struisvogel, zebra));