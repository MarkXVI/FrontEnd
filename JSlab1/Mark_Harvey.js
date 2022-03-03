
let fields = {};

document.addEventListener('DOMContentLoaded', function() {
    fields.firstname = document.getElementById('firstname').value;
    fields.lastname = document.getElementById('lastname').value;
    fields.telephone = document.getElementById('telephone').value;
    fields.email = document.getElementById('email').value;
    fields.subject = document.getElementById('subject').value;
    fields.message = document.getElementById('message').value;
});


const validate = () => {
    
    if (isValid()) {
        let form = new Form(firstname, lastname, telephone, email, subject, message);
        console.log(form);
        alert(`Thank you, ${form.firstname} ${form.lastname} for contacting me`);
    } else {
        alert('There was an error.');
    };
};

const isValid = () => {
    let valid = true;

    valid &= fieldValidation(fields.firstname, isNotEmpty);
    valid &= fieldValidation(fields.firstname, isName);

    valid &= fieldValidation(fields.lastname, isNotEmpty);
    valid &= fieldValidation(fields.lastname, isName);

    if(fields.telephone != null) {
        valid &= fieldValidation(fields.telephone, isNumber);
    }

    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);

    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
};

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value);
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    };
   
    return isFieldValid;
};

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
};

function isNumber(num) {
    const numbers = /^[-+]?[0-9]+$/;
    if(num.value.match(numbers)) {
        return true;
    };
    return false;
};

function isName(name) {
    const letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)) {
        return true;
    };
    return false;
};

function isEmail(email) {
    let regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
};

class Form {
    constructor(firstname, lastname, telephone, email, subject, message) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.telephone = telephone;
        this.email = email;
        this.subject = subject;
        this.message = message;
    };
};

const switchPage = (toPage) => {
    window.location.href = `../${toPage}.html`;
};