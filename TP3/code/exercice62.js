// Fibo2
function fibo2(limite) {
    let a = 0; // u0
    let b = 1; // u1
    let rang = 1; //  u_1 est le rang 1

    if (a > limite) return [a, 0];
    if (b > limite) return [b, 1];

    // Boucle jusqu'à trouver le premier terme > limite
    while (true) {
        const c = a + b; // Terme suivant
        a = b;
        b = c;
        rang++;
        if (b > limite) {
            return [b, rang];
        }
    }
}

const valeur = parseInt(prompt("Entrez une valeur : "));
const [valFibo, rangFibo] = fibo2(valeur);
console.log(
    `Le premier terme de Fibonacci supérieur à ${valeur} est ${valFibo}, au rang ${rangFibo}.`
);