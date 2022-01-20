/*Input check for age restriction on ride*/
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

/*Creating objects with keywords*/
function Camera(Brand, Model, Year, Color) {
    this.Camera_Brand = Brand
    this.Camera_Model = Model
    this.Camera_Year = Year
    this.Camera_Color = Color
}

/*Setting values for Tim*/
var Tim = new Camera("Fujifilm", "X-T3", 2018, "Silver")
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Tim uses a " + Tim.Camera_Color + " " + Tim.Camera_Brand + " " + Tim.Camera_Model + ", which was released in " + Tim.Camera_Year;
}

/*Attempting to assign keyword to variable*/
var Reserve_test = this
function myReserve() {
    document.getElementById("Testing").innerHTML = Reserve_test
}

/*Running a nested function to subtract 1 from the original function*/
function countup() {
    document.getElementById("Nested_Function").innerHTML = numbers();
    function numbers() {
        var x = 10;
        function minus_one() {x -= 1;}
        minus_one();
        return x;
    }

}