let suma = 0;
let numero;

do {
    numero =parseInt(prompt("Ingresa un numero (ingresa 0000 para finalizar): "));

    if (numero !== 0) {
        suma += numero;
    }

} while (numero !== 0000);

console.log ("El valor acumulado es: " + suma);

if(suma > 0) {
    console.log("El valor acumulado es mayor a cero. ");
} else if (suma < 0) {
    console.log("El valor acumulado es menor a cero. ");
} else {
    console.log ("El valor acumulado es cero. ");
}