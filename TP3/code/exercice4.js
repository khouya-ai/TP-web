// Fonction utilisant while
function triangle1(taille) {
    let i = 1;
    while (i <= taille) {
        let ligne = "";
        let j = 1;
        while (j <= i) {
            ligne += "*";
            j++;
        }
        console.log(ligne);
        i++;
    }
}

// Fonction utilisant for
function triangle2(taille) {
    for (let i = 1; i <= taille; i++) {
        let ligne = "";
        for (let j = 1; j <= i; j++) {
            ligne += "*";
        }
        console.log(ligne);
    }
}
const taille = parseInt(prompt("Entrez la taille du motif : "));
triangle1(taille);
//triangle2(taille);
