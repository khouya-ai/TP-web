function fibo1(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0; // u0
    let b = 1; // u1
    let c;

    // Boucle pour calculer n terme
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const n = parseInt(prompt("Entrez une valeur n (≥ 0) : "));
if (n < 0) {
    console.log("Veuillez entrer un entier positif.");
} else {
    console.log(`la valeur de ${n}eme term de la suite de Fibonacci est ${fibo1(n)}.`);
}


