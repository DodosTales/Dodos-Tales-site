"use strict";

window.onload=()=>{
    const calcolo = document.getElementById("calcolo");
    const result = document.getElementById("result");

    calcolo.addEventListener('click', ()=>{
        const livello = Number(document.getElementById("livello").value);
        const intelligenza = Number(document.getElementById("intelligenza").value);
        let incantesimi = 0;
        let int_inc = intelligenza;

        if (intelligenza<=-2){
            int_inc= -2;
        };

        incantesimi = livello+int_inc+1;

        if(livello%2===0 && livello>1){
            incantesimi= incantesimi - 1;
        };

        result.classList.add("border");
        result.innerText=String(incantesimi);
    });
}