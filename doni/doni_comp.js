"use strict";

import { doni_comp } from "/assets/js/main.js";

const donicomp = document.querySelector(".donicomp");

for (let i = 0; i < doni_comp.length; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add("coltext");
    newLi.textContent = doni_comp[i];
    donicomp.append(newLi);
}
