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

        let cd =
            (livello - (livello % 4)) / 4 +
            primaria +
            (mana - (mana % 5)) / 5 +
            11;
        result.classList.add("border");
        result.innerText = String(cd);
    });

    drey.addEventListener("click", () => {
        let ran = Math.floor(Math.random() * battute.length);
        spazio.innerText = battute[ran];
    });
};
