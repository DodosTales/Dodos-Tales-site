"use strict";

import { insulto_wolf } from "/Dodos-Tales-site/assets/js/main.js";

window.onload = () => {
    const wolf = document.getElementById("wolf");
    const insulti = document.getElementById("insulti");

    wolf.addEventListener("click", () => {
        let ran = Math.floor(Math.random() * insulto_wolf.length);
        insulti.innerText = insulto_wolf[ran];
    });
}