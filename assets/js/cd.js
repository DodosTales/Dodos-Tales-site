"use strict";

import { battute } from "/assets/js/main.js";

window.onload = () => {
    const calcolo = document.getElementById("calcolo");
    const result = document.getElementById("result");
    const drey = document.getElementById("drey");
    const spazio = document.getElementById("spazio");

    calcolo.addEventListener("click", () => {
        const livello = Number(document.getElementById("livello").value);
        const primaria = Number(document.getElementById("primaria").value);
        const mana = Number(document.getElementById("mana").value);

<<<<<<< HEAD:cd/cd.js
        //approssimo il livello ed il mana per ottenere interi dalla divisione 
        //la formula per la CD era 10 + 1 ogni 4 livelli (partendo da 1) + 1 ogni 5 mana spesi + caratteristica
        let cd = (livello-livello%4)/4 + primaria + (mana-mana%5)/5 + 11;
=======
        let cd =
            (livello - (livello % 4)) / 4 +
            primaria +
            (mana - (mana % 5)) / 5 +
            11;
>>>>>>> ale:assets/js/cd.js
        result.classList.add("border");
        result.innerText = String(cd);
    });

    drey.addEventListener("click", () => {
        let ran = Math.floor(Math.random() * battute.length);
        spazio.innerText = battute[ran];
    });
};
