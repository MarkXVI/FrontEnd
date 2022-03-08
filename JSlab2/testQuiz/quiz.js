const questions = [
    {
        "Question": "What gender do you consider yourself?",
        "Answer": "Male",
        "DummyAnswers": ["Female", "Other"],
        "Type": "radio"
    },
    {
        "Question": "What/ which colours do you like?",
        "Answer": ["Purple", "Green", "Yellow"],
        "Type": "checkbox"
    },
    {
        "Question": "What do you do as a pastime?",
        "Answer": "",
        "Type": "textarea"
    },
    {
        "Question": "",
        "Answer": "",
        "Type": ""
    },
    {
        "Question": "",
        "Answer": "",
        "Type": ""
    }
];


const loadQuestions = () => {

    // alert(questions.length);

    let BTNS = "";

    for(let i = 0;i < questions.length; i++)
    {
        BTNS += `<button type="button" class="tablinks" onclick="OpenTab(event, "${i+1}")">Q${i+1}</button>`;

    };
    
    let QUES = "";

    for(let i = 0; i < questions.length; i++)
    {
        if (i > 0) {
            QUES += 
            `<div id="${i+1}" class="question" style="display: none;">
            <h2>Question ${i+1}</h2>
            <p>${questions[i].Question}</p>
            </div>`;
        } else {
            QUES += 
            `<div id="${i+1}" class="question active">
            <h2>Question ${i+1}</h2>
            <p>${questions[i].Question}</p>
            </div>`;
        };
    };

    writeHTML(BTNS, QUES);

};

const writeHTML = (buttons, questions) => {
    const btns = document.querySelector('.tab');
    btns.innerHTML = buttons;
    const div = document.querySelector('.tabContent');
    div.innerHTML = questions;
};

function OpenTab(event, tabName) {
    let i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    };
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
};

function validate(event) {

    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    if (!(isName(formJSON.name))) {
        alert(formJSON.name + ' is not a valid name');
        return;
    };

    if (!(isEmail(formJSON.email))) {
        alert(formJSON.email + ' is not a valid email');
        return;
    };
    
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);

    // return false;
};

document.querySelector('.Quiz-Form').addEventListener('Submit', function(event) {
    validate(event);
});

function isName(name) {
    const letters = /^[A-Za-z]+$/;
    return letters.test(String(name).toLowerCase()) && name != null;
};

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};