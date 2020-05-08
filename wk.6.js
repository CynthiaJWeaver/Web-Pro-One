//using js and some JQuery to alert box to display the standards coding scheme information.
//show alert with Bootstrap CSS3 implem
$("#scheme").click(function () {
    $("subject").addClass("in");
});

$(".close").click(function () {
// hide alert with Bootstrap CSS3 implem
    $(this).parent().removeClass("in");
});

$(document).ready(function () {
    $("#btnSubmit").click(function () {

  $("#myAlert").show ("fade");
  });

});