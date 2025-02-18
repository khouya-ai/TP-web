// Conversion de températures
while (true) {
    let tempF = parseFloat(prompt("Entrez une température en degrés Fahrenheit : "));
    // si l'utilisateur clique sur cancel
    if(isNaN(tempF)){
        break;
    }
    console.log("Une température en Fahrenheit : :",tempF)
    let tempC = (tempF - 32) * 5/9;
    console.log("cette température équivaut a ", tempC.toFixed(2), " degrés Celsius" )
}
