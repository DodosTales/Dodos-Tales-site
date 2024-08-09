"use strict";

window.onload=()=>{
    const calcolo = document.getElementById("calcolo");
    const result = document.getElementById("result");

    calcolo.addEventListener('click', ()=>{
        const livello = Number(document.getElementById("livello").value);
        const principale = Number(document.getElementById("principale").value);
        const classe = String(document.getElementById("classe").value);
        let incantesimi = 0;
        let princ_inc = principale;

        if (classe === "magic") {
            if (principale<=-2){
                princ_inc= -2;
            };

            incantesimi = 2*Math.floor(livello/3) + 2 + princ_inc;
        }

        if (classe === "fight") {
            if (principale<=0){
                princ_inc= 0;
            };
            
            incantesimi = Math.floor(livello/3) + princ_inc;
        }

        if (classe === "special") {
            if (principale<=-1){
                princ_inc= -1;
            };

            incantesimi = 2*Math.floor(livello/3) + 1 + princ_inc;
        }

        result.classList.add("border");
        result.innerText=String(incantesimi);
    });
}