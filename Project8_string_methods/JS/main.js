/* Combining multiple strings into one using the concat method*/
function full_Sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("combiner").innerHTML = whole_sentence;   
}

/* Specifying a part of the string to cut out using the slide method */
function cut_em_up() {
    var words = "This sentence is really special!"
    var cutOut = words.slice(24,33);
    document.getElementById("cutUp").innerHTML = cutOut;
}

/* Using the toUpperCase method to make the whole string upper case */
    var x = "Test Text";
    document.getElementById("upper").innerHTML = x.toUpperCase()

/* Using the search method to determine what character in the sentence the method specifies starts at */
    var a = "This is a sentence to test a string location"
    document.getElementById("locator").innerHTML = a.search("test")

/* Converting a number to a string */
    var b = 50
    document.getElementById("numberstring").innerHTML = b.toString() + " is a string"

/* Using the precision method to specify number length */
    var c = 3.14152653589
    document.getElementById("precise").innerHTML = c.toPrecision(5)

/* Using the fixed method to round the current number to the specified decimal amount */
    var d = 5.674
    document.getElementById("fixin").innerHTML = d.toFixed(1)

/* Using the valueOf method to return the value of an array */
    var e = ["Fuji", "Sony", "Blackmagic", "Arri"]
    document.getElementById("valueofarray").innerHTML = e.valueOf()