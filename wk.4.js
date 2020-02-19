/*Create a simple web page, with Java Script*/
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = "Good Evening";
} else if (hourNow > 12) {
    greeting = "Good Afternoon";
} else if (hourNow > 0) {
    greeting = "Good Morning";
} else {
    greeting = "Hello";
}
document.write ("<h1>" + greeting + "</h1>");

var price;
var campingNights;
var tripCost;
price = 18;
campingNights = 9;
totalTrip = price + campingNights;
var el = document.getElementById ("cost");
el.textContent = $ + totalTrip



