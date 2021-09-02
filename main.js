/**
 * ****************************************************************************
 * Purpose: The purpose of this program to measure the quantities like lenght,
 * temperature, and vovume.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 01-09-2021
 * ****************************************************************************
 */

var readLine = require('readline-sync');
const { measureLength, measureVolume, tempMeasurement } = require('./quantityMeasurementBL');

let type = readLine.question("\nEnter 'l' for Length, \nEnter 't' for temperature, \nEnter 'v' for volume : ");
let userInput = readLine.questionInt("\nEnter value to be measure : ");
let valueIn = readLine.question("\nEntered value In : ");
let measureTo = readLine.question("\nMeasure To : ");
let result = 0;

switch(type){
    case 'l':
        result = measureLength(userInput, valueIn, measureTo);
        break;
    case 't':
        result = tempMeasurement(userInput, valueIn, measureTo);
        break;
    case 'v':
        result = measureVolume(userInput, valueIn, measureTo);
        break;
    default:
        console.log("\nPlease Enter Valid Input");
}

console.log("\nresult : ", result, " ", measureTo);
