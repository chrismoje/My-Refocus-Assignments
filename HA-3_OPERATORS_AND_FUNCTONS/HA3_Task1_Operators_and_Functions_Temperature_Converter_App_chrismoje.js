// HOME ASSIGNMENT-3 TASK 1 OPERATORS AND FUNCTIONS
//CHRIS MOJE
// TEMPERATURE CALCULATOR APP

let tempCelsius = 90; // variable to hold temperature in Celsius
let tempFahrenheit = 120; // variable to hold the temperature in Fahrentheit
let tempKelvin = 0; // initialize a global variable


//Function to convert Deg Celsius to Kelvin
function CelsiusToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

//Function to convert Deg Fahrenheit to Kelvin
function FahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = ((tempFahrenheit - 32)* 5/9)+ 273.15;
    return tempKelvin;
}

console.log(CelsiusToKelvin(tempCelsius) + ' Kelvin'); // Display the conversion from Celsius to Kelvin
console.log(FahrenheitToKelvin(tempFahrenheit) + ' Kelvin'); //Display the conversion from Fahrenheit to Kelvin