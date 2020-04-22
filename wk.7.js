
function Student(fm) {
    this.need = fm.need.checked;
    this.noNeed = fm.noNeed.checked;
    this.grade = fm.grade.value;
    this.binder = fm.binder.checked;
    this.notebook = fm.notebook.checked;
    this.agenda = fm.agenda.checked;
    this.dividers = fm.dividers.checked;
    this.paper = fm.paper.checked;
    this.folder = fm.folder.checked;

    this.recommendation = function () {
        if
            (!this.need) {
            return "Please bring your supplies by the 2nd wee of classes. Thank you!";
        }
    }
}
function process_form() {
    var fm = document.getElementById("my_form");
    var out = document.getElementById("output");
    var student = new Student(fm);


    console.log("Debug:" + JSON.stringify(student))

}
