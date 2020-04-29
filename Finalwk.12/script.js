//function is to process the teacher selection by user


function process_select(obj) {
    //console.log(obj.value);

var teacher_idx = obj.value;
var msg = "";

if (teacher_idx == 0) {
    msg = "Please select a Teacher's name.";
} else if (teacher_idx == 1) {
    msg = "<a href=https://www.youtube.com/watch?time_continue=19&v=nkkxzRQS9dI&feature=emb_logo>Google Classroom</a>" + ";" +
    " <a href=https://www.youtube.com/watch?v=x2m_Z3zfUjg&feature=emb_logo>Microsoft Teams</a>";
} else if (teacher_idx == 2) {
    msg = "<a href=https://www.youtube.com/watch?v=4hOfZrQGCIE>Edgenuity</a>" + ";" +
    " <a href=https://www.youtube.com/watch?v=WfSCfBntqPU>Microsoft Outlook</a>" + ";" + 
    " <a href=https://www.youtube.com/watch?time_continue=19&v=nkkxzRQS9dI&feature=emb_logo>Google Classroom</a>" + ";" +
    " <a href=https://www.youtube.com/watch?v=x2m_Z3zfUjg&feature=emb_logo>Microsoft Teams</a>";
} else if (teacher_idx == 3) {
    msg =  "<a href=hhttps://www.youtube.com/watch?v=x2m_Z3zfUjg&feature=emb_logo>Microsoft Teams</a>";
} else if (teacher_idx == 4) {
    msg = "<a href=https://www.youtube.com/watch?v=vOU2WbU8URg >Khan Academy</a>" + ";" +
    " <a href=https://www.youtube.com/watch?v=WfSCfBntqPU>Microsoft Outlook</a>" + ";" + 
    " <a href=https://www.youtube.com/watch?time_continue=19&v=nkkxzRQS9dI&feature=emb_logo>Google Classroom</a>" + ";" +
    " <a href=https://www.youtube.com/watch?v=x2m_Z3zfUjg&feature=emb_logo>Microsoft Teams</a>";
}else if (teacher_idx == 5) {
    msg = "<a href=https://www.youtube.com/watch?v=vOU2WbU8URg >Khan Academy</a>" + ";" +
    " <a href=https://www.cpalms.org/page786.aspx>Floridastudents.org</a>";
}
document.getElementById("output").innerHTML = msg;
}
function myFunction() {
    var checkBox = document.getElementById("edgenuity");
    var text = document.getElementById("text1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";

    }
    var checkBox = document.getElementById("teams");
    var text = document.getElementById("text2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
       
    }
    var checkBox = document.getElementById("khan");
    var text = document.getElementById("text3");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
              
    }
    var checkBox = document.getElementById("classroom");
    var text = document.getElementById("text4");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
  }
}