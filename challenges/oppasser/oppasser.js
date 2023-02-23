let aantalPoten = 0;
function berekenPoten(giraf, struisvogel, zebra){
    aantalPoten = giraf*4 + struisvogel*2 + zebra*4;
    return aantalPoten;
}

let giraf = parseInt(prompt("Aantal poten."));
let struisvogel = parseInt(prompt("Aantal poten."));
let zebra = parseInt(prompt("Aantal poten."));
console.log(berekenPoten(giraf, struisvogel, zebra));