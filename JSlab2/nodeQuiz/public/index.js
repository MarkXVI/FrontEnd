
const cards = document.getElementById('cards');



function loadQuizCards() {

    fetch('/read/dir', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {console.log(data);});
    
    let card = {
        name: "1",
        len: 4
    };
    cards.innerHTML = `<div class="card" onclick="choose(${card.name})"><div class="container"><h4><b>${card.name}</b></h4><p>${card.len} questions</p></div></div>`;
};
loadQuizCards();

function choose(name) {

};