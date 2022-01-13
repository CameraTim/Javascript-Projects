function changeText() {
    document.getElementById("thetext").style.color = "green"; /*assigning the id and color style to the text*/
}

function combiner() {
    var words = "These are words," /*setting the first variable*/
    words += " and these are more words." /*setting the second variable with an operator*/
    document.getElementById("concat").innerHTML = words; /*assigning the "words" variable to the id for the text*/
}