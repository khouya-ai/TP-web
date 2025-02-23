// Demander à l'utilisateur d'entrer la taille de la pyramide
const taille = parseInt(prompt("Donnez taille du motif : "));

// Boucle pour afficher chaque ligne de la pyramide
for (let i = 1; i <= taille; i++) {
    let espaces = " ".repeat(taille - i); // Espaces pour centrer la pyramide
    let etoiles = "*".repeat(2 * i - 1);  // Calcul du nombre d'étoiles
    console.log(espaces + etoiles);
}