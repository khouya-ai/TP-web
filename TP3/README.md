## Travaux Pratiques : JavaScript
- Etudiant : **Oussama KHOUYA**
- Encadrente : **Pr. Oumayma AGHERAI**
- Cours : **Technologies Web et XML & Web sémantique**
- Date de soumission : **18-02-2025**
- Code source sur [github](https://github.com/khouya-ai/TP-web)

## Introduction
L'objectif de ce tp est de pratiquer les bases de language javascript

### Exercice 1 : Conversion de températures
```javascript
// Conversion de températures
while (true) {
    // on demande à l'utilisateur de saisir une température en Fahrenheit
    let tempF = parseFloat(prompt("Entrez une température en degrés Fahrenheit : "));
    // si l'utilisateur clique sur cancel ou entre une valeur non numérique
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
```javascript
    // pour ameliorer le programme j'ai ajouté des conditions pour afficher les textes en fonction de la valeur
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
### Exercice 4-bis : Affichage de motifs - pyramides
### Exercice 5 : Tester si un nombre est premier
### Exercice 7 : Valeur approchée de la √ d'un nombre réel positif


## Conclusion
Ces exercices permettent de mettre en pratique les concepts de base de la création de sites web avec des styles personnalisés.