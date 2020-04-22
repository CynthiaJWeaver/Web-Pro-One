//function is to process the teacher selection by user
function process_select(obj) {
    //console.log(obj.value);

var teacher_idx = obj.value;
var msg = "";

if (teacher_idx == 0) {
    msg = "Please select a Teacher's name.";
} else if (teacher_idx == 1) {
    msg = "Mrs. Lamb is using Google Classroom, Microsoft Teams, and Achieve3000.";
} else if (teacher_idx == 2) {
    msg = "Mrs. Miller is using Google Classroom, Microsoft Teams, Outlook Student Email, and Edgenuity.";
} else if (teacher_idx == 3) {
    msg = "Mrs. Perez is using Microsoft Teams.";
} else if (teacher_idx == 4) {
    msg = "Dr. Spaulding is using Google Classroom, Microsoft Teams, Outlook Student Email, and Kahn Academy.";
}else if (teacher_idx == 5) {
    msg = "Mrs. Williams is using Outlook Student Email, and Floridastudents.org.";
}
document.getElementById("output").innerHTML = msg;
}
function process_select(obj) {
    //console.log(obj.value);

var platform_idx = obj.value;
var link = "";

if (platform_idx == 0) {
    link = "Please select a Learning Platform.";
} else if (platform_idx == a) {
    link = "";
} else if (platform_idx == b) {
    link = "";
} else if (platform_idx == c) {
    link = "";
} else if (platform_idx == d) {
    link = "";
}else if (platform_idx == e) {
    link = "";
}
document.getElementById("output").innerHTML = msg;
}