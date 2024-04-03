"use strict";

export let DiceSVG;

await fetch("/Dodos-Tales-site/assets/img/dnd_dice.svg")
    .then((response) => response.text())
    .then((response) => {
        DiceSVG = new DOMParser().parseFromString(response, "text/xml");
    })
    .catch(console.error);

export function changeSVG(svg, number) {
    let textSize = 0;
    let textPos = 0;
    let text = "" + number;

    switch (text.length) {
        case 1:
            textPos = 100;
            textSize = 85;
            break;
        case 2:
            textPos = 80;
            textSize = 70;
            break;
        case 3:
            textPos = 75;
            textSize = 60;
            break;
    }
    svg.getElementById("svg1").setAttribute("width", "64");
    svg.getElementById("tspan1").textContent = parseInt(text);
    svg.getElementById("tspan1").setAttribute("x", textPos);
    svg.getElementById("tspan1").style = "font-size:" + textSize;

    return svg.documentElement.outerHTML;
}
