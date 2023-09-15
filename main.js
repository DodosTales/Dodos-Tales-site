"use strict";
//in questo script ci stanno variabili da esportare e impostazioni del sito che non modificano il layout


//elenco doni classici
const doni_mag = ["magia del gigante", "magia del fuoco", "magia delle illusioni", "magia della distruzione", "magia medica", "magia della carta", "magia del vuoto", "magia della forza", "magia dell'acido", "magia demoniaca", "take over demon", "magia del veleno", "magia ninja", "magia del sale", "magia del fumo", "magia dei libri", "magia degli animali", "magia del plasma", "magia della pestilenza", "magia degli origami", "magia dei ragni", "magia dello specchio", "magia della giada", "magia degli insetti", "magia della paura", "magia della danza", "magia delle polveri", "magia della galassia", "magia della neve", "magia della guerra", "magia del controllo", "magia delle emozioni", "magia dell'oracolo", "magia degli sciami", "magia alchemica", "magia delle magie", "magia dei golem", "take over angel", "magia della vita", "magia della morte", "magia del riequip", "magia della non morte", "magia del fulmine", "magia delle carte", "take over feral beast", "take over partial beast", "scrittura delle ombre", "magia del ghiaccio", "magia delle maledizioni", "magia a scelta", "solid script", "magia degli spiriti celesti", "magia delle piante", "magia dell'acqua", "magia della velocità", "magia dei metalli", "magia dell'aria", "magia delle pistole", "magia dei parassiti", "memory make", "magia del legno", "magia della sabbia", "magia del disegno", "magia degli spiriti", "magia della terra", "magia della gravità", "magia dei funghi", "magia della gomma", "magia delle esplosioni", "magia spaziale", "magia solare", "magia lunare", "magia del buio", "magia della luce", "magia degli scudi", "magia vodoo", "magia delle spine", "magia della creazione", "magia del suono", "magia delle stelle", "magia dei cristalli", "magia dei portali", "anti-magia", "magia del sangue", "magia della strategia", "magia dei legami", "magia delle catene", "magia dei colori", "magia della lava", "magia delle ossa", "magia della musica", "magia dei profumi", "magia dell'immaginazione", "magia angelica", "magia della fortuna/sfortuna", "magia della cera", "magia delle tempeste", "magia della corruzione", "magia dei sogni/incubi", "doppia magia"];

//elenco doni completi
const doni_comp = ["magia del sole", "magia della guarigione", "magia della creazione", "magia del corpo", "magia della luce", "magia dell'aria", "magia medica", "magia della galassia", "magia delle emozioni", "magia degli spiriti celesti", "magia degli spiriti", "magia lunare", "magia delle stelle", "magia dei cristalli", "magia dei legami", "magia angelica", "magia protettiva", "magia della non morte", "magia del controllo", "magia della morte", "magia demoniaca", "magia della pestilenza", "magia delle maledizioni", "magia degli spiriti", "magia delle ossa", "magia della corruzione", "magia dei patti", "magia degli oni", "magia delle bambole", "magia del desiderio", "magia dell'omicidio", "magia della distruzione", "magia del veleno", "magia dei parassiti", "magia delle ombre", "magia delle illusioni", "magia ninja", "magia del plasma", "magia dei ragni", "magia voodoo", "magia della paura", "magia delle pistole", "magia del buio", "magia delle catene", "magia dello spazio", "magia del riequip", "magia dell'immaginazione", "magia delle polveri", "magia del sale", "magia del fumo", "magia dello specchio", "magia dell'oracolo", "magia della sabbia", "magia dei portali", "anti-magia", "magia della fortuna/sfortuna", "magia dei sogni/incubi", "magia degli artefatti", "take over demon", "take over angel", "magia dei giganti", "magia delle fate", "magia della forza", "magia del partial beast", "magia degli scudi", "magia delle spine", "magia della cera", "magia dei folletti", "magia della copia", "magia della trasformazione", "take over monster", "take over undead", "magia del fuoco", "magia del fulmine", "magia della velocità", "magia dell'acido", "magia della terra", "magia della danza", "magia della voce", "magia della guerra", "magia del ghiaccio", "magia del metallo", "magia della gravità", "magia della gomma", "magia delle esplosioni", "magia della lava", "magia del caos", "magia della natura", "magia dell'acqua", "magia degli animali", "magia dei vegetali", "magia del cibo", "magia dei dolci", "magia degli ortaggi", "magia delle bevande", "magia degli insetti", "magia della neve", "magia degli sciami", "magia dei fiori", "magia del legno", "magia dei funghi", "magia dei profumi", "magia delle tempeste", "magia della cucina", "magia della conoscenza", "magia della strategia", "magia dei golem", "magia dei gadget", "magia delle pozioni", "magia della giada", "magia del colore", "magia solid script", "magia dei libri", "magia degli origami", "magia alchemica", "magia delle carte", "magia del memory make", "magia del disegno", "magia del suono", "magia dei cristalli", "magia della musica", "magia della casa", "magia del trasporto", "magia del gioco", "magia delle fiabe", "magia delle magie", "magia dei rifiuti", "magia della legge", "magia del denaro", "magia dell'argilla", "magia dei felini", "magia dei pets", "magia delle droghe", "magia del peccato", "magia della virtù", "magia del dolore", "magia degli elementi", "senza dono", "dono a scelta", "doppio dono"];

//frasi Drey
const battute = ["Ci separa un abisso... metaforicamente e materialmente", "Non starmi addosso ho bisogno di spazio", "Per Perseus: la tua immaginazione SPAZIA, ma tu continui ad essere mediocre", "Non c'è abbastanza spazio per entrambi", "C'eri quasi, ma hai sbagliato spazio dove colpire", "C'è lo SPAZIO bambini dove puoi trovare gente al tuo livello", "Io posso invadere il tuo spazio vitale...tu non puoi", "Ho sentito un pò di solletico solletico...se continui così mi farai fare risate spaziali", "Non capisco perchè condivido il mio spazio con voi", "Oltre ad occupare spazio sei bravo in qualcos'altro?", "Mi hai fatto male... non è vero non ci sei nemmeno andato vicino", "Con gli occhi la gente percepisce lo spazio, evidentemente tu non ci vedi bene", "La tua magia è spaziale! Scusami mi stavo guardando allo specchio", "Hai altre idee in testa o hai già finito lo spazio per averle?", "Se continui così mi SPAZIOentisco!", "Dovresti apprendere altri incantesimi, così spazi il tuo repertorio"];

export {doni_mag, doni_comp, battute};