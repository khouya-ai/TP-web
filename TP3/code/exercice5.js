function estPremier(n) {
    if (n < 2) return false; // les nombres < 2 ne sont pas premiers
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return i; // Retourne le premier diviseur trouvé
        }
    }
    return true;
}

// Demander à l'utilisateur d'entrer un entier positif
const nombre = parseInt(prompt("Donnez un entier positif : "));
console.log("Donnez un entier positif :"+nombre);
if (nombre < 1) {
    console.log("Veuillez entrer un entier positif valide.");
} else {
    let resultat = estPremier(nombre);
    if (resultat === true) {
        console.log(`${nombre} est un nombre premier.`);
    } else {
        if (nombre === 1) {
            console.log(`${nombre} n'est pas un nombre premier.`);
        }else {
            console.log(`${nombre} n'est pas un nombre premier, il est divisible par ${resultat}.`);

        }
    }
}
