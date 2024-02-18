/* Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
Entrada: 
Salida
Entrada:
Salida
Pruébalo con los valores numéricos que se te ocurran. */


function convertirTemperatura() {
    let temperatura = prompt("Ingresa la temperatura en grados Celsius:");
    
    while (isNaN(temperatura)) {
        console.error("Error: Ingresa un número válido.");
        temperatura = prompt("Ingresa la temperatura en grados Celsius:");
    }
    
    return parseFloat(temperatura);
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function celsiusAKelvin(celsius) {
    return celsius + 273.15;
}

let temperaturaCelsius = convertirTemperatura();

if (!isNaN(temperaturaCelsius)) {
    let temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
    let temperaturaKelvin = celsiusAKelvin(temperaturaCelsius);

    console.log("Temperatura en grados Kelvin: " + temperaturaKelvin.toFixed(2));
    console.log("Temperatura en grados Fahrenheit: " + temperaturaFahrenheit.toFixed(2));

}
