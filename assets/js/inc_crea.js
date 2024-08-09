"use strict";

window.onload=()=>{
    const crea = document.getElementById("crea");
    const result = document.getElementById("result");
    const res_name = document.getElementById("res_name");

    //importazione dei campi obbligatori con i loro valori in stringa
    let name = document.getElementById("name");

    let mana = document.getElementById("mana");

    let action = document.getElementById("action");

    let hit_type = document.getElementById("hit_type");

    let gittata = document.getElementById("gittata");

    let target = document.getElementById("target");

    let durata = document.getElementById("durata");

    let ts = document.getElementById("ts");
    let malus = document.getElementById("malus");
    let bonus_princ = document.getElementById("bonus_princ");

    let description = document.getElementById("description");


    crea.addEventListener ('click', ()=> {
        
        //validazione

        let name_validity = name.reportValidity();
        let mana_validity = mana.reportValidity();
        let action_validity = action.reportValidity();
        let hit_type_validity = hit_type.reportValidity();
        let gittata_validity = gittata.reportValidity();
        let durata_validity = durata.reportValidity();
        let ts_validity = ts.reportValidity();
        let malus_validity = malus.reportValidity();
        let bonus_princ_validity = bonus_princ.reportValidity();
        let description_validity = description.reportValidity();

        if (name_validity === true && mana_validity === true && name_validity === true && action_validity === true && hit_type_validity === true && gittata_validity === true && durata_validity === true && ts_validity === true && malus_validity === true && bonus_princ_validity === true && description_validity === true){

            //importo i valori dei campi obbligatori
            let name_txt = String(name.value);
            let mana_txt = String(mana.value);
            let action_txt = String(action.options[action.selectedIndex].text);
            let hit_type_txt = String(hit_type.options[hit_type.selectedIndex].text);
            let gittata_txt = String(gittata.options[gittata.selectedIndex].text);
            let target_txt = String(target.value);
            let durata_txt = String(durata.options[durata.selectedIndex].text);
            let description_txt = String(description.value);

            //creo la stringa finale dove verranno aggiunti i campi facoltativi
            let final_txt = "Mana: " + mana_txt + "\n" + "Azione: " + action_txt + "\n" + "Come colpisce: " + hit_type_txt + "\n" + "Gittata: " + gittata_txt + "\n";

            //controllo se l'area è stata inserita
            let area = document.getElementById("area");
            let area_txt = String(area.value);
            if (area_txt.length!==0){
                final_txt += "Area: " + area_txt + "\n";
            };

            //ci aggiungo i bersagli e la durata
            final_txt += "Bersagli: " + target_txt + "\n" + "Durata: " + durata_txt + "\n"

            //variabili per memorizzare i risultati facoltativi
            let info_alert = "";

            //verifica tipo ts se l'incantesimo ha un ts
            let ts_txt = String(ts.options[ts.selectedIndex].text);

            if (ts_txt === "Si"){

                let ts_princ = document.getElementById("ts_princ");
                let ts_princ_txt = String(ts_princ.options[ts_princ.selectedIndex].text);

                if (ts_princ_txt.length!== 0){
                    final_txt += "TS: " + ts_princ_txt + "\n";
                } else{
                    info_alert += "Tipo TS richiesto, dato che avrà un TS \n";
                }

                let ts_sec = document.getElementById("ts_sec");
                let ts_sec_txt = String(ts_sec.options[ts_sec.selectedIndex].text);

                if (ts_sec_txt.length!== 0){
                    final_txt += "TS secondario: " + ts_sec_txt + "\n";
                }
            }

            //verifica cura se cura
            let cura = document.getElementById("cura");
            let cura_txt = String(cura.options[cura.selectedIndex].text);

            let val_cura = document.getElementById("val_cura");
            let val_cura_txt = String(val_cura.value);

            if (cura_txt.length!== 0){

                if (val_cura_txt.length!== 0){
                    final_txt += "Cura: " + cura_txt + "  " +  val_cura_txt + "\n";
                } else {
                    info_alert += "Quantità cura richiesta, dato che cura \n";
                }
            }

            //verifica danno se l'incantesimo fa danno
            let dado_princ = document.getElementById("dado_princ");
            let dado_princ_txt = String(dado_princ.options[dado_princ.selectedIndex].text);

            let dado_sec = document.getElementById("dado_sec");
            let dado_sec_txt = String(dado_sec.options[dado_sec.selectedIndex].text);

            let damage_sec = document.getElementById("damage_sec");
            let damage_sec_txt = String(damage_sec.value);

            let typedam_sec = document.getElementById("typedam_sec");
            let typedam_sec_txt = String(typedam_sec.options[typedam_sec.selectedIndex].text);

            //verifica danno primario
            if (dado_princ_txt.length!== 0){

                let damage_princ = document.getElementById("damage_princ");
                let damage_princ_txt = String(damage_princ.value);

                let typedam_princ = document.getElementById("typedam_princ");
                let typedam_princ_txt = String(typedam_princ.options[typedam_princ.selectedIndex].text);

                if (damage_princ_txt.length!== 0){
                    if (dado_princ_txt.length!==0){
                        final_txt += "Danno: " + dado_princ_txt + "  " + damage_princ_txt + "\n";
                    } else {
                        info_alert += "Dado danno richiesto, dato che fa danno \n"; 
                    }
                } else {
                    info_alert += "Quantità dado richiesto, dato che fa danno \n";
                }

                if (typedam_princ_txt.length!== 0){
                    if (dado_sec_txt.length===0 && damage_sec_txt.length===0 && typedam_sec_txt.length!==0){
                        final_txt += "Tipo danno: metà " + typedam_princ_txt + "metà "+ typedam_sec_txt + "\n";
                    } else {
                        final_txt += "Tipo danno: " + typedam_princ_txt + "\n";
                    }
                } else {
                    info_alert += "Tipo danno richiesto, dato che fa danno \n";
                }
            }

            //verifica danno secondario
            if (dado_sec_txt.length!== 0){

                if (damage_sec_txt.length!== 0){
                    if (dado_sec_txt.length!==0){
                        final_txt += "Danno secondario: " + dado_sec_txt + "  " + damage_sec_txt + "\n";
                    } else {
                        info_alert += "Dado danno secondario richiesto, dato che fa danno \n"; 
                    }
                } else {
                    info_alert += "Quantità dado secondario richiesto, dato che fa danno \n";
                }

                if (typedam_sec_txt.length!== 0){
                    final_txt += "Tipo danno secondario: " + typedam_sec_txt + "\n";
                } else {
                    info_alert += "Tipo danno secondario richiesto, dato che fa danno \n";
                }
            }

            //verifico la penalità se la infligge
            let malus_txt = String(malus.options[malus.selectedIndex].text);

            if (malus_txt === "Si"){

                let malus_val = document.getElementById("malus_val");
                let malus_val_txt = String(malus_val.value);

                if (malus_val_txt.length!==0){
                    final_txt += "Infligge un malus di: " + malus_val_txt + "\n";
                } else {
                    info_alert += "Valore penalità richiesto, dato che infligge penalità"
                }
            }

            //verifico il bonus principale se presente
            let bonus_princ_txt = String(bonus_princ.options[bonus_princ.selectedIndex].text);

            if (bonus_princ_txt === "Si"){

                let type_bonus_princ = document.getElementById("type_bonus_princ");
                let type_bonus_princ_txt = String(type_bonus_princ.options[type_bonus_princ.selectedIndex].text);

                let val_bonus_princ = document.getElementById("val_bonus_princ");
                let val_bonus_princ_txt = String(val_bonus_princ.value);

                if (val_bonus_princ_txt.length!==0 && type_bonus_princ_txt !==0){
                    final_txt += "Fonisce un bonus " + type_bonus_princ_txt + " di " + val_bonus_princ_txt + "\n";
                } else {
                    if (val_bonus_princ_txt.length===0){
                        info_alert += "Valore bonus richiesto, dato che fornisce bonus \n"
                    }

                    if (type_bonus_princ_txt ===0){
                        info_alert += "Tipo bonus richiesto, dato che fornisce bonus \n"
                    }
                }
            }

            //verifico il bonus secondario se presente
            let bonus_sec = document.getElementById("bonus_sec");
            let bonus_sec_txt = String(bonus_sec.options[bonus_sec.selectedIndex].text);

            if (bonus_sec_txt === "Si"){

                let type_bonus_sec = document.getElementById("type_bonus_sec");
                let type_bonus_sec_txt = String(type_bonus_sec.options[type_bonus_sec.selectedIndex].text);

                let val_bonus_sec = document.getElementById("val_bonus_sec");
                let val_bonus_sec_txt = String(val_bonus_sec.value);

                if (val_bonus_sec_txt.length!==0 && type_bonus_sec_txt !==0){
                    final_txt += "Bonus secondario" + type_bonus_sec_txt + " di " + val_bonus_sec_txt + "\n";
                } else {
                    if (val_bonus_sec_txt.length===0){
                        info_alert += "Valore bonus secondario richiesto, dato che fornisce bonus secondario \n"
                    }

                    if (type_bonus_sec_txt ===0){
                        info_alert += "Tipo bonus secondario richiesto, dato che fornisce bonus secondario \n"
                    }
                }
            }

            //controllo se c'è l'allert da inviare
            if (info_alert.length!==0){
                alert(info_alert);
                final_txt = "";
            }

            final_txt += description_txt + "\n";

            //compilo il testo ricopiabile
            res_name.innerText = name_txt;

            result.innerText = final_txt; 

        } else {
            alert ('Non hai compilato tutti i campi obbligatori');
        }
    });
}