"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p1Line= "Line 1: ";
for (let i =1; i<= 10; i++) {
    p1Line += i+ " ";
}
let p2Line= "Line 2: ";
for (let i =10; i>= 1; i--) {
    p2Line += i+ " ";
}
printOut(p1Line);
printOut(p2Line);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p2GuessNumber = 45;
let p2RandomNumber = 0;

while (p2RandomNumber !== p2GuessNumber) {
    p2RandomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + p2RandomNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p3GuessNumber = 45;
let p3RandomNumber = 0;
let p3Attempts = 0;
let p3TimeStart = Date.now();

do {
  p3RandomNumber = Math.floor(Math.random()*1000000) + 1;
  p3Attempts++;
}
while (p3RandomNumber !== p3GuessNumber);

let p3TimeEnd = Date.now();
let p3TimeTaken = (p3TimeEnd - p3TimeStart);
printOut (`The random number is: ${p3RandomNumber}`);
printOut(`Number of attempts: ${p3Attempts}`);
printOut(`Time taken: ${p3TimeTaken} miliseconds`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let i = 2
let p4Resultat ="";

while (i<200){
    let isPrime = true;

    for (let j = 2; j < i; j++){
        if (i % j === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
    p4Resultat += i + " ";
    }
  i++;
}
printOut (p4Resultat);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r = 1; r <= 7; r++) {
    let radTxt = "";
    for (let k = 1; k <= 9; k++) {
        radTxt = radTxt + "K" + k + "R" + r + " ";
    }
    printOut (radTxt);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const fullscore = 236;

for (let p6Attempt = 1; p6Attempt <= 5; p6Attempt++){
    let studentGrade = Math.floor(Math.random()*fullscore)+1;

    let percentage = (studentGrade/fullscore)*100;
    let gradeTxt= "";

if (percentage >= 89) {
    gradeTxt = "A";
}else if (percentage >= 77){
    gradeTxt = "B";
 } else if (percentage >= 65) {
        gradeTxt = "C";
} else if (percentage >= 53) {
        gradeTxt = "D";
} else if (percentage >= 41) {
        gradeTxt = "E";
} else {
        gradeTxt = "F";
}

printOut ("Student" + p6Attempt + ": " + studentGrade + " (" + percentage.toFixed(1) + "%) = " + gradeTxt);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dice = [];
let throws = 0;

while (true) {
    dice = [];


    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
    }

    throws++;

    dice.sort((a, b) => a - b);

    if (dice.join("") === "123456") {
        printOut(dice.join(" "));

        printOut("Straight! It took " + throws + " throws.");
        break;
    }
}

while (true) {
    dice = [];


    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
    }

    throws++;

    dice.sort((a, b) => a - b);

    const trePar = dice [0] === dice[1] && dice [2] === dice[3] && dice [4] === dice [5];
    const bareTrePar = dice [1] !== dice [2] && dice [3] !== dice [4];

    if (trePar&&bareTrePar){
        printOut (dice.join(" "));

        printOut("3 pairs! It took " + throws + " throws.");
        break;
    }
}

while (true) {
    dice = [];


    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
    }

    throws++;

    dice.sort((a, b) => a - b);

    const trePar = dice [0] === dice[1] && dice [2] === dice[3] && dice [4] === dice [5];
    const erTower = (dice[1] === dice[2] || dice[3] === dice[4]) && !(dice[1] === dice[2] && dice[3] === dice[4]);

    if (trePar&&erTower){
        printOut (dice.join(" "));

        printOut("Tower! It took " + throws + " throws.");
        break;
    }
}

while (true){
    dice = [];

    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
    }

    throws++;

    dice.sort((a,b)=> a - b);

     if (["111111", "222222", "333333", "444444", "555555", "666666"].includes(dice.join(""))){
        printOut(dice.join(" "));

        printOut("Yatzee! It took " + throws + " throws.");
        break;
    }
}


printOut(newLine);
