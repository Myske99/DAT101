"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeTimes = Math.floor(Math.random() * 3) + 6;

printOut("Woke up at " + wakeTimes +" o'clock.");
if (wakeTimes===7){
    printOut ("I can catch the bus to school.");
}else if (wakeTimes===8){
    printOut ("I can take the train to school.");
} else { 
    printOut ("I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part4Number = Math.floor(Math.random()*11) - 5;
printOut("Value: "+ part4Number);

if (part4Number > 0) {
    printOut("The number is positive");
} else if (part4Number < 0) {
    printOut("The number is negative");
} else {
    printOut("The number is zero!");
}

printOut(newLine);

printOut("--- Part 6 and 7----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize}`);
if (imageUserSize >= imageMinSize) {
    if (imageUserSize <= imageMaxSize) {
        printOut("Thank you.");
    } else {
        printOut("Image is too large.");
    }
} else {
    printOut("Image is too small!");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Month is = " + monthName);
if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You don't need to take vitamin D");
}
printOut(newLine); 

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) {
    //28-29 days
    case "February":
        printOut(monthName + " has 28/29 days in month.");
        break;
    //30 days
    case "April":
    case "June":
    case "September":
    case "November":
         printOut(monthName + " has 30 days in month.");
         break;

    //31 days
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        printOut(monthName + " has 31 days in month.");
        break;

    default:
        printOut("30 days in month.");
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "March" || (monthName === "May")) {
    printOut("Sorry, the gallery is closed!");
} else if (monthName === "April") {
    printOut("The main gallery is closed in April, however, you're welcome to visit our temporary premiss next door!");
} else {
    printOut("Welcome to my gallery!")

}

