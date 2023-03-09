const buttonsPerRow = 5; // Het aantal buttons per rij
const totalButtons = 30; // Aantal buttons

let rows = Math.ceil(totalButtons / buttonsPerRow); // Berekent hoeveel rijen er zijn
let container = document.getElementById("container");

// Dit maakt alle buttons aan in de HTML pagina
for (i = 0; i < rows; i++){
    let row = document.createElement("div");
    row.classList.add("button");

    // Bepaal het aantal knoppen voor de huidige rij
    let buttonsForRow = Math.min(buttonsPerRow, totalButtons - i * buttonsPerRow);

    for (x = 0; x < buttonsForRow; x++){
        let button = document.createElement("button");
        button.innerHTML = `${i * buttonsPerRow + x + 1}`;
        row.appendChild(button);
    }

    container.appendChild(row);
}
