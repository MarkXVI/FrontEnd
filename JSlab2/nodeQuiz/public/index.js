
const cards = document.getElementById('cards');

let cardList = [];


function loadQuizCards() {

    let html = '';

    fetch('/read/dir', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].split('.').slice(0, -1).join('.'));
            html += `<div class="card" onclick="choose("${data[i].split('.').slice(0, -1).join('.')}")"><div class="container"><h4><b>${data[i].split('.').slice(0, -1).join('.')}</b></h4></div></div>`;
        };
        html += `<div class="card" onclick="choose("NewQuiz")"><div class="container"><h4><b>Add a new Quiz</b></h4></div></div>`;
        cards.innerHTML = html;
    });
    
};
loadQuizCards();

function choose(name) {
    console.log(name);
};