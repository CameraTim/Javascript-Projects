/*function operator() {
    document.write(typeof true);
    document.getElementById("op").innerHTML;
}*/

/*Coercion example of combining different value types*/
function coer() {
    document.write("Your worst nightmare" + 10);
    document.getElementById("co").innerHTML;
}

/*Example display of NaN (Not a Number)*/
function Nantest1() {
    document.getElementById("notnumber").innerHTML = 0/0;
}

/*Check to see if the value is a number*/
function Nantest2() {
    document.getElementById("nantrue").innerHTML = isNaN("Bicycle");
}

function Nantest3() {
    document.getElementById("nanfalse").innerHTML = isNaN(55);
}

/*Example of infinity and negative infinity*/
function infinpos() {
    document.getElementById("infin1").innerHTML = 3E310;
}

function infinneg() {
    document.getElementById("infin2").innerHTML = -3E310;
}

/*BOOLEAN OPERATORS*/
/*Check if values are greater than or less than*/
function booonyou1() {
    document.getElementById("scaredyou1").innerHTML = 3 > 2
}

function booonyou2() {
    document.getElementById("scaredyou2").innerHTML = 3 < 2
}

/*Check if values are equal*/
function booonyou3() {
    document.getElementById("scaredyou3").innerHTML = 3 == 2
}

function booonyou4() {
    document.getElementById("scaredyou4").innerHTML = 2 == 2
}

/*Check if values and types are equal*/
function typecheck1() {
    var t = "Matching!"
    var r = "Matching!"
    document.getElementById("tripleequal1").innerHTML = r === t
}

function typecheck2() {
    var t = 8
    var r = "Tree"
    document.getElementById("tripleequal2").innerHTML = r === t
}

function typecheck3() {
    var t = 40
    var r = "40"
    document.getElementById("tripleequal3").innerHTML = r === t
}

function typecheck4() {
    var t = "Matching!"
    var r = "Not Matching!"
    document.getElementById("tripleequal4").innerHTML = r === t
}

/*"And" check if both values are true*/
function andop1() {
    document.getElementById("andcheck1").innerHTML = 9 > 1 && 5 > 4
}

function andop2() {
    document.getElementById("andcheck2").innerHTML = 9 > 1 && 4 > 5
}

/*"Not" check if the value isn't true*/
function notop1() {
    document.getElementById("notcheck1").innerHTML = !(5>6)
}

function notop2() {
    document.getElementById("notcheck2").innerHTML = !(6>5)
}

/*"Or" check if one of the values is true*/
function orop1() {
    document.getElementById("orcheck1").innerHTML = 5 > 6 || 1234 > 5
}

function orop2() {
    document.getElementById("orcheck2").innerHTML = 1 > 5 || 1234 > 4321
}

/*Displaying data in the console log under the Developer Tools in the browser*/
console.log(5 * 2)
console.log(4 < 2)