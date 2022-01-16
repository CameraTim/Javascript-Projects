/*Math function for addition*/
function add() {
    var x = 2 + 3;
    document.getElementById("Math1").innerHTML = "2 + 3 = " + x;
}

/*Math function for subtraction*/
function sub() {
    var x = 9 - 4;
    document.getElementById("Math2").innerHTML = "9 - 4 = " + x;
}

/*Math function for multiplication*/
function mul() {
    var x = 2 * 3;
    document.getElementById("Math3").innerHTML = "2 x 3 = " + x;
}

/*Math function for division*/
function div() {
    var x = 12 / 4;
    document.getElementById("Math4").innerHTML = "12 / 4 = " + x;
}

/*Math function for each primary operator*/
function allmath() {
    var z = (2 + 5 - 3) * 6 / 3;
    document.getElementById("Math5").innerHTML = "(2 + 5 - 3) x 6 / 3 = " + z;
}

/*Math function for modulus (remainders)*/
function rem() {
    var y = 78 % 8;
    document.getElementById("Math6").innerHTML = "The remainder of 78 / 8 is " + y;
}

/*Math function for negation*/
function neg() {
    var x = 5;
    document.getElementById("Math7").innerHTML = -x;
}

/*Math function for increments*/
function inc() {
    var x = 5;
    document.getElementById("Math8").innerHTML = ++x;
}

/*Math function for decrements*/
function dec() {
    var x = 5;
    document.getElementById("Math9").innerHTML = --x;
}

/*Math function for something entirely random, at least within its own parameters*/
function rand() {
    var x = Math.floor(Math.random() * 100);
    document.getElementById("Math10").innerHTML = x;
}

/*Math function for a Math Object and Method*/
function mathob() {
    var x = Math.log10(100);
    document.getElementById("Math11").innerHTML = x;
}