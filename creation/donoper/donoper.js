"use strict";

import { doni_comp, doni_mag } from "../../main.js";

window.onload = ()=>{

    const maggiori = document.getElementById("magg");
    const comp = document.getElementById("comp");
    const exmaggiori = document.getElementById("exmagg");
    const extramagg = document.getElementById("extramag");
    const excomp = document.getElementById("excomp");
    const extracomp = document.getElementById("extracomp");
    const magdiv = document.getElementById("magdiv");
    const listamag = document.querySelectorAll(".listamag");
    const compdiv = document.getElementById("compdiv");
    const listacomp = document.querySelectorAll(".listacomp");

    const getRandomInt = (max) =>{
       return Math.floor(Math.random() * max);
    };

    maggiori.addEventListener('click', ()=>{
        listamag.forEach((el)=>{
            const ran = getRandomInt(doni_mag.length);
            el.innerText = String(ran+1) + "--" + doni_mag[ran];
        });
        magdiv.classList.remove("hidden");
    });

    exmaggiori.addEventListener('click', ()=>{
        const ran = getRandomInt(doni_mag.length);
        extramagg.innerText = String(ran+1) + "--" + doni_mag[ran];
    });

    comp.addEventListener('click', ()=>{
        listacomp.forEach((el)=>{
            const ran = getRandomInt(doni_comp.length);
            el.innerText = String(ran+1) + "--" + doni_comp[ran];
        });
        compdiv.classList.remove("hidden");
    });

    excomp.addEventListener('click', ()=>{
        const ran = getRandomInt(doni_comp.length);
        extracomp.innerText = String(ran+1) + "--" + doni_comp[ran];
    });
};