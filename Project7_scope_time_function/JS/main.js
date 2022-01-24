/* Global variable */
var x = 10

/* Local variable */
function locvar() {
    var y = "Ten"
}

/* Attempting to call a local variable from a different function */
function theerror() {
    document.getElementById("errorcheck").innerHTML = y
}

/* Using the console method to debug the error */
console.log(theerror)

/* Using an If and Else Statement to determine what the message reads based on time of day */
function showtime() {
    if (new Date().getHours() < 18) {
        document.getElementById("timeofday").innerHTML = "Have a great day!";
    }
    else {
        document.getElementById("timeofday").innerHTML = "Have a great night!";
    }
}

/* Using an If and Else Statement to detemine whether the user's input is an even or odd number */
function eonumber() {
    var eo;
    eo = document.getElementById("evenodd").value;
    if (eo % 2 == 0) {
        document.getElementById("answer").innerHTML = "You entered an even number";
    }
    else {
        document.getElementById("answer").innerHTML = "You entered an odd number";
    }
}

/* Running an If, Else If, and Else Statement to display one of three messages based on time of day */
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}