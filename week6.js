let standards = [{
        grade: 4,
        code: "MAFS.4.OA.1.1",
        cognitiveLevel: 2,
        example: '',
        desc: 'Interpret a multiplication equation as a comparison, e.g., interpret 35 = 5 × 7 as a ' +
            'statement that 35 is 5 times as many as 7 and 7 times as many as 5. Represent verbal statements of ' +
            'multiplicative comparisons as multiplication equations.'
    },
    {
        grade: 4,
        code: "MAFS.4.OA.1.2",
        cognitiveLevel: 2,
        example: '',
        desc: 'Multiply or divide to solve word problems involving multiplicative comparison, e.g., ' +
            'by using drawings and equations with a symbol for the unknown number to represent the problem, ' +
            'distinguishing multiplicative comparison from additive comparison.'
    }
];

let properties = ['code', 'grade', 'cognitiveLevel', 'desc', 'example'];

window.onload = function () {
    for (let i = 0; i < standards.length; i++) {
        this.addDefaultStandard(standards[i].code, i);
    }
    document.getElementById('standardSelector').value = -1;
}

function displayStandard() {
    let standardIndex = document.getElementById('standardSelector').value; //index of the selected standard
    for(let i = 0; i < properties.length; i++) {
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
    for(let i = 0; i < properties.length; i++) {
        let value = document.getElementById(properties[i] + 'Input').value;
        newStandard[properties[i]] = value;
    }
    standards.push(newStandard);

    //add the custom standard to the standardsSelector
    let sel = document.getElementById('standardSelector');
    let standard = document.createElement('option');
    console.log(newStandard);
    standard.appendChild(document.createTextNode(newStandard.code));
    standard.value = standards.length - 1;
    sel.appendChild(standard);
}