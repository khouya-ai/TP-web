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