"use strict";

import { changeSVG, DiceSVG } from "/Dodos-Tales-site/assets/js/dice_svg.js";
import { doni_mag } from "/Dodos-Tales-site/assets/js/main.js";

const doni = document.querySelector(".doni");

doni_mag.forEach((element, i) => {
    let dom = `<div class='row mb-2 justify-content-start align-items-center'>
                <div class='col-3 col-md-2 col-lg-1'>${changeSVG(
                    DiceSVG,
                    i + 1
                )}</div>
                <div class='col coltext'>${element}</div>
            </div>`;

    doni.innerHTML += dom;
});
