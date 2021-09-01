var readLine = require('readline-sync');

let unitsList = {
    fahrenheit: 0,
    celcius: 1,
    kelvin: 2,
 }

 let scale = {
    fahrenheit: [1, -17.2222, 255.928],
    celcius: [33.8, 0.01, 274.15],
    kelvin: [-457.87, -272.15, 1],
 }

let userInput = readLine.questionInt("\nEnter value to be measure : ");
let valueIn = readLine.question("\nEntered value In : ");
let measureTo = readLine.question("\nMeasure To : ");
let result = 0;
tempMeasurement = (userInput, valueIn, measureTo) => {

    switch (valueIn) {
        case "fahrenheit":
            if (measureTo == "celcius")
                return (userInput - 32) / 1.8;
            else if (measureTo == "kelvin")
                return ((userInput - 32) / 1.8) + 273.15;
            else
                return 1;
            break;
        case "celcius":
            if (measureTo == "fahrenheit")
                return (userInput * 1.8) + 32;
            else if (measureTo == "kelvin")
                return userInput + 273.15;
            else
                return 1;
            break;
        case "kelvin":
            if (measureTo == "fahrenheit")
                return ((userInput - 273.15) * 1.8) + 32;
            else if (measureTo == "celcius")
                return userInput - 273.15;
            else
                return 1;
            break;

    }
}

result = tempMeasurement(userInput, valueIn, measureTo);

console.log("\nresult : ", result, " ", measureTo);
