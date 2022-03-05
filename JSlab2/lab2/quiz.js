const questions = [
    {
        type: "radio",
        question: "Question 1: What is the Capital of Sweden?",
        answers: ["Kristianstad", "Stockholm", "Mora", "Kiruna"],
        correct: 2
    },
    {
        type: "checkbox",
        question: "Question 2: What color(s) is/are on the Swedish flag?",
        answers: ["Red", "Blue", "Yellow", "Green"],
        correctList: ["Blue", "Yellow"]
    },
    {
        type: "textarea",
        question: "Question 3: What is the Swedish National Dish?",
        correctText: "meatballs"
    }

];

let answered = {};

let questionNr = 0;
let result = 0;

const question = document.getElementById('question');
const answers = document.getElementById('answer');
const button = document.getElementById('button');

const QNR = document.getElementById('QuizNumber');
const NoQ = document.getElementById('NoQ');

const validateInput = () => {
    let input = [document.getElementById('fname').value, document.getElementById('lname').value, document.getElementById('email').value];

    if (!(isName(input[0]))) {
        alert(input[0] + ' is not a valid first name');
        return;
    };

    if (!(isName(input[1]))) {
        alert(input[1] + ' is not a valid last name');
        return;
    };

    if (!(isEmail(input[2]))) {
        alert(input[2] + ' is not a valid email');
        return;
    };

    answered.name = input[0] + ' ' + input[1];
    answered.email = input[2];

    questionNr += 1;
    Show();
}

function isName(name) {
    const letters = /^[A-Za-z]+$/;
    return letters.test(String(name).toLowerCase()) && name != null;
};

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) && email != null;
};

const validateAnswer = () => {

    if (questions[questionNr-1].type == "radio") {
        let check = document.querySelectorAll('input[name="answer"]:checked');
        if (check == null || check.length == 0) {
            alert('Please select an answer!')
            return;
        } 
        if (questions[questionNr-1].answers[questions[questionNr-1].correct-1] == check[0].id) {
            result += 1;
        }

        answered.radio = check[0].id;

    };
    if (questions[questionNr-1].type == "checkbox") {
        let checklist = [];

        let check = document.querySelectorAll('input[type="checkbox"]:checked');
        check.forEach(element => {
            checklist.push(element.id);
            questions[questionNr-1].answers.forEach(answer => {
                let points = 1 / questions[questionNr-1].correctList.length;
                if (element.id == answer && !questions[questionNr-1].correctList.includes(answer)) {
                    result -= points;
                };
                if (element.id == answer && questions[questionNr-1].correctList.includes(answer)) {
                    result += points;
                };
            })
        });
        if (check == null || check.length == 0) {
            alert('Please select an answer!')
            return;
        };


        answered.checkbox = checklist;

    };
    if (questions[questionNr-1].type == "textarea") {
        let check = document.querySelector('textarea').value;
        if (check == null || check == '') {
            alert('Please enter an answer!')
            return;
        }
        if (check.includes(questions[questionNr-1].correctText)) {
            result += 1;
        };

        answered.textarea = check;
    };

    questionNr += 1;
    Show();
};

function Show() {

    answers.innerHTML = "";

    QNR.innerHTML = questionNr;
    NoQ.innerHTML = ` / ${questions.length}`;

    if (questionNr == 0)
    {
        QNR.innerText = 'ʕ•ᴥ•ʔ';
        NoQ.innerText = '';
        question.innerHTML = `
            <input type="text" id="fname" placeholder="John" class="input">
            <input type="text" id="lname" placeholder="Smith" class="input"> <br>
            <input type="email" id="email" placeholder="example@example.com" class="input">`;
        button.innerHTML = '<button class="button" type="button" onclick="validateInput()">Start Quiz</button>';
    }
    else if (0 < questionNr && questionNr <= questions.length)
    {
        question.innerHTML = `<p>${questions[questionNr-1].question}</p>`;
        if (questions[questionNr-1].type == "radio") {
                for (let i = 0; i < questions[questionNr-1].answers.length; i++) {
                    let answer = questions[questionNr-1].answers[i];
                    answers.innerHTML += `<input class="answer" type="radio" name="answer" id="${answer}">${answer}</input>`;
                    if(i % 2 != 0) {
                        answers.innerHTML += '<br>';
                    };
                };
            };
        if (questions[questionNr-1].type == "checkbox") {
                for (let i = 0; i < questions[questionNr-1].answers.length; i++) {
                    let answer = questions[questionNr-1].answers[i];
                    answers.innerHTML += `<input class="answer" type="checkbox" name="answer" id="${answer}">${answer}</input>`;
                    if(i % 2 == 0) {
                        answers.innerHTML += '<br>';
                    };
                };
            };
        if (questions[questionNr-1].type == "textarea") {
                answers.innerHTML = '<textarea name="answer" placeholder="Enter your answer here." required></textarea>';
        };
        button.innerHTML = '<button class="button" type="button" onclick="validateAnswer()">Submit</button>';  
    }
    else if (questionNr > questions.length)
    {
        QNR.innerText = 'ʕ•ᴥ•ʔ';
        NoQ.innerText = '';
        button.innerHTML = '';
        ShowResults();
    };  
};

const ShowResults = () => {
    
    question.innerText = `Your result was ${result} out of ${questions.length}`;
    answers.innerText = 'Your answers were: ' + JSON.stringify(answered, null, 2);
}

Show();