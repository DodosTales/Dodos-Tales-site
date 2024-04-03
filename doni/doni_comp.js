"use strict";

import { changeSVG, DiceSVG } from "/Dodos-Tales-site/assets/js/dice_svg.js";
import { doni_comp } from "/Dodos-Tales-site/assets/js/main.js";

const donicomp = document.querySelector(".donicomp");

/*for (let i = 0; i < doni_comp.length; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add("coltext");
    newLi.textContent = doni_comp[i];
    donicomp.append(newLi);
}*/

doni_comp.forEach((element, i) => {
    let dom = `<div class='row mb-2 justify-content-start align-items-center'>
                <div class='col-3 col-md-2 col-lg-1'>${changeSVG(
                    DiceSVG,
                    i + 1
                )}</div>
                <div class='col coltext'>${element}</div>
            </div>`;

    donicomp.innerHTML += dom;
});
