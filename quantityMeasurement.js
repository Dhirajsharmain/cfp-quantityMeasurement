/**
 * ****************************************************************************
 * Purpose: The purpose of this program to measure the quantities like lenght,
 * temperature, and vovume.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 30-08-2021
 * ****************************************************************************
 */

 var readLine = require('readline-sync');

 let lenghtList = {
    milliMeter: 0,
    centiMeter: 1,
    meter: 2,
    kiloMeter: 3
 }

 let scale = {
    milliMeter: [1, 0.1, 0.001, 0.000001],
    centiMeter: [10, 1, 0.01, 0.00001],
    meter: [1000, 100, 1, 0.001],
    kiloMeter: [100000, 10000, 1000, 1]
 }

 let userInput = readLine.questionInt("\nEnter value to be measure : ");
 let valueIn = readLine.question("\nEntered value In : ");
 let measureTo = readLine.question("\nMeasure To : ");

 let mTo = lenghtList[measureTo];
 let val = scale?.[valueIn]?.[mTo];

 measureLength = (val, userInput) => {
    return val * userInput;
 }

 let resut = measureLength(val, userInput);

 console.log("\nresult : ", resut, " ", measureTo);