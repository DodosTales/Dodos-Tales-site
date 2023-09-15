"use strict";

import { doni_mag } from "../main.js";

const doni = document.querySelector(".doni");

for (let i=0; i<doni_mag.length; i++){
    let newLi = document.createElement("li");
    newLi.classList.add("coltext");
    newLi.textContent = doni_mag[i];
    doni.append(newLi);
}