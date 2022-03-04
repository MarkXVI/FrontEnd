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
        BTNS += `<button class="qbtn" onclick="OpenTab("${i+1}")">Q${i+1}</button>`;

    };
    
    let QUES = "";

    for(let i = 0; i < questions.length; i++)
    {
        QUES += 
        `<div id="${i+1}" class="question" style="display:none;">
        <h2>Question ${i+1}</h2>
        <p>${questions[i].Question}</p>
        </div>`;
    };

    writeHTML(BTNS, QUES);

};

const writeHTML = (buttons, questions) => {
    const btns = document.querySelector('.questionButtons');
    btns.innerHTML = buttons;
    const div = document.querySelector('.questions');
    div.innerHTML = questions;
};

function OpenTab(tab) {
    const x = document.getElementsByClassName("questions");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    };
    document.getElementById(tab).style.display = "block";
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

};

const form = document.querySelector('.Quiz-Form');
form.addEventListener('Submit', validate(this.onSubmit));

function isName(name) {
    const letters = /^[A-Za-z]+$/;
    return letters.test(String(name).toLowerCase());
};

function isEmail(email) {
    let regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
};