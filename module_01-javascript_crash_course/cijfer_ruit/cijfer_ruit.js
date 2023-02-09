var cijferGevraagd = parseInt(prompt("Vul een getal in "));
var placeholder = "";

for(let x = 0; x < cijferGevraagd; x++){
    for(let i = 0; i < x; i++){
        if(i < 1){
            placeholder += `${i + 1}`
        }
        else{
            placeholder += -`${i + 1}`
        }
    }
    placeholder += "\n"
}

for(let x = cijferGevraagd; x > 0; x--){
    for(let i = 0; i < x; i++){
        if(i < 1){
            placeholder += `${i + 1}`
        }
        else{
            placeholder += -`${i + 1}`
        }
    }
    placeholder += "\n"
}
document.getElementById("diamond").innerText = placeholder;