/* Countdown timer with input tab */
function countdown() {
    var seconds = document.getElementById("seconds").value;

    /* Setting the timer to count by -1 every 1000ms */
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick()
}

/* Creating the photo index variable */
var slideIndex = 1;
showSlides(slideIndex);

/* Creating the function to adjust slide number */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Creating the function to show which slide is active based on dot indicators*/
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Doing a comparison with the slide number and a starting point to determine which slide is active */
function showSlides(n) {
    /* Creating the variables that link to and modify HTML */
    var i;
    var slides = document.getElementsByClassName("myPhoto");
    var dots = document.getElementsByClassName("slideDot");
    /* Comparing which slides are active to determine next/previous slide and dot to activate and turn off */
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}