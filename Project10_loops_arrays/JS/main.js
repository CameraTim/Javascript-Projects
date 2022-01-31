/* While loop that adds a space (<br>) after every iteration of the loop */

function Call_Loop() {
    var x = 10;
    var spacer = "";
    /* Setting "while" loop */
    while (x > 5) {
        /* Adding the spacer variable to the value of x, then subtracting 1 from x through each iteration */
        spacer += x + "<br>";
        document.getElementById("Loop").innerHTML = spacer;
        x = x-1;
    }
}


var Cameras = ["Fujifilm", "Blackmagic", "Arri", "RED", "Sony"];
var spacing = "";
var Y;

function for_Loop() {
    for (Y=0; Y < Cameras.length; Y++) {
        spacing += Cameras[Y] + "<br>";
    }
    document.getElementById("Cameras_List").innerHTML = spacing
    
}

function array_Function() {
    var Lenses = [];
    Lenses[0] = "Fuji";
    Lenses[1] = "Sigma";
    Lenses[2] = "Laowa";
    Lenses[3] = "Canon";
    Lenses[4] = "Viltrox";
    Lenses[5] = "Tokina";
    document.getElementById("Array").innerHTML = "The lens choice is " + Lenses[2] + ".";
}

let text = "How long is this?";
let length = text.length;
document.getElementById("stringlength").innerHTML = length;

function constant_function() {
    const Team = {city:"Pennsylvania", name:"Penguins", sport:"Hockey"};
    Team.city = "Pittsburgh";
    Team.year = "1967";
    document.getElementById("Constant").innerHTML = "The " + Team.sport + " team from " + Team.city + " called the " + Team.name + " was formed in " + Team.year + "."
}

function let_function() {
    let me = "I'm special!";
    document.getElementById("letItHappen").innerHTML = me;
}

function returntosender(camera) {
    return camera + " is a camera manufacturer.";
}

document.getElementById("returning").innerHTML = returntosender("Fujifilm");

let camera_body = {
    brand: "Sony",
    model: "a7S III",
    color: "black",
    year: "2020",
    descript : function() {
        return "The camera is a " + this.color + " " + this.brand + " " + this.model + ", which was released in " + this.year + ".";
    }
}
document.getElementById("letThereBeObject").innerHTML = camera_body.descript();

var spacing_1 = "";
for (var a = 0; a < 10; a++) {
    if (a === 5) {break;}
    spacing_1 += "The current iteration is " + a + "<br>";
}
document.getElementById("thisWillBreak").innerHTML = spacing_1;

var spacing_2 = "";
for (var a = 0; a < 10; a++) {
    if (a === 5) {continue;}
    spacing_2 += "The current iteration is " + a + "<br>";
}
document.getElementById("thisWillContinue").innerHTML = spacing_2;