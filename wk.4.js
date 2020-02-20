/*Create a simple web page, with Java Script*/
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 14) {
    greeting = "Good Evening";
} else if (hourNow > 12) {
    greeting = "Good Afternoon";
} else if (hourNow > 0) {
    greeting = "Good Morning";
} else {
    greeting = "Hello";
}
document.write("<h1>" + greeting + "</h1>");





