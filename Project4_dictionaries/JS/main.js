function dict() { /*Creating the dictionary function*/
    var Camera = { /*Setting the "dictionary" values*/
        Brand:"Fujifilm",
        Model:"X-T3",
        Color:"Silver",
        Released:"2018",
    }
    delete Camera.Color; /*Removing the "Color" value fromt he dictionary*/
    document.getElementById("Dictionary").innerHTML = Camera.Color; /*Attempting to call the Color value*/
}