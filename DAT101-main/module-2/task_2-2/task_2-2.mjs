"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMatExp =  "2 + 3 * (2 - 4) * 6";
const p1answer =  2 + 3 * (2 - 4) * 6;
printOut(orgMatExp);
printOut(newMatExp + " = " + p1answer);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const oneInch = 25.4 // millimeters
const metersInMillimeters = 25 * 1000;
const centimetersInMillimeters = 34 * 10;
const millimeters = metersInMillimeters + centimetersInMillimeters
const inches = millimeters / oneInch;
printOut(`25 meters = ${inches.toFixed(2)}`);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let a = "3 days 12 hours 14 minutes 45 seconds";
const days = 3;
const hour = 12; 
const sec = 45;
const minDay = (days * 24) * 60;
const minHour = hour * 60;
const min = 14;
const minSec = sec / 60;
const p3answer = minDay + minHour + min + minSec + " minutes total";

printOut (a);
printOut (p3answer);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let b = "6322.52 minutes";
let p4Days = 6322.52 / (24 * 60)
const roundVal = Math.floor(p4Days);
let p4Hours = (p4Days - roundVal) * 24;
const roundVal2 = Math.floor(p4Hours);
let p4Min = (p4Hours - roundVal2) * 60;
const roundVal3 = Math.floor (p4Min);
let p4Sec = (p4Min - roundVal3) * 60;
const roundVal4 = Math.floor (p4Sec);
// REMAINDER???

printOut (b);
printOut (`${roundVal} days ${roundVal2} hours ${roundVal3} minutes ${roundVal4} seconds`)


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let c = "54USD Rate: 76NOK = 8.6USD";
let nokRate = 76/8.6;
let nokUsd = 54 * nokRate;

let usdRate = 8.6/76;
let usdNok = 477 * usdRate;

printOut(c);
printOut (`54USD = ${Math.round(nokUsd)}NOK`);
printOut (`477NOK = ${Math.round(usdNok)}USD`);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txt = "There is much between heaven and earth that we do not understand."
let txtL = "The text has " + txt.length + " characters";
let txtP = txt.charAt(19) + " is at position 19";
let txtSu = txt.substring(35, 43); 
let txtS = "Earth starts at position " + txt.indexOf("earth");

printOut(txt);
printOut (txtL);
printOut (txtP);
printOut (txtSu);
printOut(txtS);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let d = 5;
let result = (d>3);

let e = 7;
let result2 = (e>=7);

let f = "a";
let result3 = (f>"b");

let g = 1; 
let result4 = (g<"a");

let h = "2500";
let result5 = (h<"abcd");

let i = "arne";
let result6 = (i!=="thomas");

let j = 2;
let j2 = 5;
let result7 = (j===j2);

let k = "abcd";
let k2 = "bcd";
let result8 = (k>k2);

printOut (`5 > 3 is ${result}`);
printOut (`7 >= 7 is ${result2}`);
printOut (`"a" > "b" is ${result3}`);
printOut (`1 < "a" is ${result4}`);
printOut (`"2500" < "abcd" is ${result5}`);
printOut (`"arne !== "thomas" is ${result6}`);
printOut (`(2 equals 5) === true is ${result7}`);
printOut (`"abcd" > "bcd" ${result8} is true`);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let l = Number("254");
let m = parseFloat("57.23");
let n = parseInt("25 kroner");

printOut(`"254" = ${l}`);
printOut(`"57.23" = ${m}`);
printOut(`"25 kroner" = ${n}`);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random()*360+1);

printOut ("Math.floor(Math.random()*360+1) = " + r);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let o = 131;
let p = Math.floor(o/7);
let q = o % 7;

printOut( "131 days is "+ p + " weeks and " + q + " days");