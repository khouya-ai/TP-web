## TP : JavaScript
Réalisé par **Oussama KHOUYA**, le : **23-02-2025**, lien sur [github](https://github.com/khouya-ai/TP-web)

L'objectif de ce tp est de pratiquer les bases du language javascript :

### Exercice 1 : Conversion de températures
```javascript
// Conversion de températures
while (true) {
    // on demande à l'utilisateur de saisir une température en Fahrenheit
    let tempF = parseFloat(prompt("Entrez une température en degrés Fahrenheit : "));
    // si l'utilisateur clique sur cancel ou entre une valeur non numérique
    // on sort de la boucle
    if(isNaN(tempF)){
        break;
    }
    // on affiche la température en Fahrenheit
    console.log("Une température en Fahrenheit : :",tempF)
    // on convertit la température en Celsius
    let tempC = (tempF - 32) * 5/9;
    // on affiche la température en Celsius
    console.log("cette température équivaut a ", tempC.toFixed(2), " degrés Celsius" )
}


```
### Exercice 2 : Conversion de durées
```javascript
function hjms(s) {
    // on affiche la durée en secondes
    console.log("Une durée en secondes :", s)
    // on calcule le nombre de jours, d'heures, de minutes et de secondes
    let j = Math.floor(s/(60*60*24));
    let h = Math.floor((s%(60*60*24))/(60*60));
    let m = Math.floor(((s%(60*60*24))%(60*60))/60);
    let rs = Math.floor(s - (j*60*60*24 + h*60*60 + m*60));
    // on choisit le texte à afficher en fonction de la valeur
    let textj = (j === 0 ) ? "":(j===1)? `${j} jour`:`${j} jours`
    let texth = (h === 0 ) ? "":(h===1)? `${h} heure`:`${h} heures`
    let textm = (m === 0 ) ? "":(m===1)? `${m} minute`:`${m} minutes`
    let texts = (s === 0 ) ? "":(s===1)? `${s} second`:`${s} seconds`
    // on affiche le résultat
    console.log(`cette durée équivaut à ${textj} ${texth} ${textm} ${texts} `)
}

while (true) {
    let s = parseInt(prompt("Entrez une durée en secondes : "));
    // si l'utilisateur clique sur cancel ou entre une valeur non numérique
    if (isNaN(s)) {
        break;
    }
    // on appelle la fonction hjms
    hjms(s);
}

```
### Exercice 2-bis : Améliorer le programme de conversion de durées
Pour ameliorer le programme j'ai ajouté des conditions pour afficher les textes en fonction de la valeur
```javascript
    let textj = (j === 0 ) ? "":(j===1)? `${j} jour`:`${j} jours`
    let texth = (h === 0 ) ? "":(h===1)? `${h} heure`:`${h} heures`
    let textm = (m === 0 ) ? "":(m===1)? `${m} minute`:`${m} minutes`
    let texts = (s === 0 ) ? "":(s===1)? `${s} second`:`${s} seconds`

```
### Exercice 3 : Classer 3 nombres
```javascript
// Demander à l'utilisateur d'entrer trois nombres
let num1 = parseFloat(prompt("Entrez le premier nombre :"));
let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let num3 = parseFloat(prompt("Entrez le troisième nombre :"));

// Vérifier si les entrées sont des nombres valides
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    // ajouter les nombres dans un tableau
    let numbers = [num1, num2, num3];
    // Trier les nombres en ordre croissant
    sortedNumbers = numbers.sort((x, y) => x - y);
    // Afficher les nombres triés
    console.log("Les nombres triés en ordre croissant :", sortedNumbers);
} else {
    // Afficher un message d'erreur
    console.log("Veuillez entrer des nombres valides.");
}
```

### Exercice 4 : Affichage de motifs - escaliers
```javascript
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
```
```javascript
// Exemple Avec triangle1
const taille = parseInt(prompt("Entrez la taille du motif : "));
triangle2(taille);

// Exemple Avec triangle2
const taille = parseInt(prompt("Entrez la taille du motif : "));
triangle2(taille);
```
### Exercice 4-bis : Affichage de motifs - pyramides
- ce programme affiche des étoiles sous la forme d'un piramide
- la methode **repeat** permet de dupliquer une chaine de caracters plusieurs fois
```javascript
// Demander à l'utilisateur d'entrer la taille de la pyramide
const taille = parseInt(prompt("Donnez taille du motif : "));

// Boucle pour afficher chaque ligne de la pyramide
for (let i = 1; i <= taille; i++) {
    let espaces = " ".repeat(taille - i); // Espaces pour centrer la pyramide
    let etoiles = "*".repeat(2 * i - 1);  // Calcul du nombre d'étoiles
    console.log(espaces + etoiles);
}

```
### Exercice 5 : Tester si un nombre est premier
```javascript
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

```
### Exercice 6 : Suite de Fibonacci
- Fibo1
```javascript
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



```
- Fibo2
```javascript
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
```