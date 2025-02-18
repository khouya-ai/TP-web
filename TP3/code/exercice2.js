function hjms(s) {
    let j = Math.floor(s/(60*60*24));
    let h = Math.floor((s%(60*60*24))/(60*60));
    let m = Math.floor(((s%(60*60*24))%(60*60))/60);
    let rs = Math.floor(s - (j*60*60*24 + h*60*60 + m*60));
    let textj = (j === 0 ) ? "":(j===1)? `${j} jour`:`${j} jours`
    let texth = (h === 0 ) ? "":(h===1)? `${h} heure`:`${h} heures`
    let textm = (m === 0 ) ? "":(m===1)? `${m} minute`:`${m} minutes`
    let texts = (s === 0 ) ? "":(s===1)? `${s} second`:`${s} seconds`
        console.log("Une durée en secondes :", s)
    console.log(`cette durée équivaut à ${textj} ${texth} ${textm} ${texts} `)
}

while (true) {
    let s = parseInt(prompt("Entrez une durée en secondes : "));
    // si l'utilisateur clique sur cancel
    if (isNaN(s)) {
        break;
    }
    hjms(s);
}
