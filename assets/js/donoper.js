"use strict";

import { changeSVG, DiceSVG } from "/Dodos-Tales-site/assets/js/dice_svg.js";
import { doni_comp} from "/Dodos-Tales-site/assets/js/main.js";

const comp = document.getElementById("comp");
const excomp = document.getElementById("excomp");
const extracomp = document.getElementById("extracomp");
const listacomp = document.querySelectorAll(".listacomp");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function multipleDoni(elem, array) {
    elem.forEach((el) => singoloDono(el, array));
}

function singoloDono(elem, array) {
    let ran = getRandomInt(array.length);
    elem.innerHTML = `<div class='row mb-2 justify-content-start align-items-center'>
                <div class='col-6 col-md-4 col-lg-3'>${changeSVG(
                    DiceSVG,
                    ran + 1
                )}</div>
                <div class='col coltext'>${array[ran]}</div>
            </div>`;
}

comp.addEventListener("click", () => multipleDoni(listacomp, doni_comp));

excomp.addEventListener("click", () => singoloDono(extracomp, doni_comp));
