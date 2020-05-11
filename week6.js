//array of standards
let standards = [{
        grade: 6,
        code: "ELA.6.R.1.1",
        cognitiveLevel: 2,
        example: 'A Long Walk to Water by Linda Sue Park',
        desc: 'Analyze how the interaction between characters contributes to the development of a plot in a literary text.'
    },
    {
        grade: 6,
        code: "ELA.6.R.1.2",
        cognitiveLevel: 3,
        example: "The Devil's Arithmetic by Jane Yolen",
        desc: 'Analyze the development of stated or implied theme(s) throughout a literary text.'
    },
    {
        grade: 7,
        code: "ELA.7.R.1.1",
        cognitiveLevel: 2,
        example: "“An Occurrence at Owl Creek Bridge” by Ambrose Bierce",
        desc: ' Analyze the impact of setting on character development and plot in a literary text.'
    },
    {
        grade: 7,
        code: "ELA.7.R.1.2",
        cognitiveLevel: 3,
        example: "“Do Not Go Gentle into That Good Night” by Dylan Thomas",
        desc: 'Compare two or more themes and their development throughout a literary text.'
    },
    {
        grade: 8,
        code: "ELA.8.R.1.1",
        cognitiveLevel: 2,
        example: "Dr. Jekyll and Mr. Hyde by Robert Louis Stevenson ",
        desc: 'Analyze the interaction between character development, setting, and plot in a literary text.'
    },
    {
        grade: 8,
        code: "ELA.8.R.1.2",
        cognitiveLevel: 3,
        example: "To Kill a Mockingbird by Harper Lee",
        desc: 'Analyze two or more themes and their development throughout a literary text.'
    }
];
//using let and for to loop
let properties = ['code', 'grade', 'cognitiveLevel', 'desc', 'example'];

window.onload = function () {
    for (let i = 0; i < standards.length; i++) {
        this.addDefaultStandard(standards[i].code, i);
    }
    document.getElementById('standardSelector').value = -1;
}

function displayStandard() {
    let standardIndex = document.getElementById('standardSelector').value; //index of the selected standard
    for (let i = 0; i < properties.length; i++) {
        let sel = document.getElementById(properties[i] + 'Display');
        sel.value = standards[standardIndex][properties[i]];
    }
}

function addDefaultStandard(code, index) {
    let sel = document.getElementById('standardSelector');
    let standard = document.createElement('option');
    standard.appendChild(document.createTextNode(`${code}`));
    standard.value = index;
    sel.appendChild(standard);
}

function addCustomStandard() {
    let newStandard = {};
    for (let i = 0; i < properties.length; i++) {
        let value = document.getElementById(properties[i] + 'Input').value;
        newStandard[properties[i]] = value;
    }
    standards.push(newStandard);

    //add the custom standard to the standardsSelector
    let sel = document.getElementById('standardSelector');
    let standard = document.createElement('option');
    standard.appendChild(document.createTextNode(newStandard.code));
    standard.value = standards.length - 1;
    sel.appendChild(standard);

//console.log
}