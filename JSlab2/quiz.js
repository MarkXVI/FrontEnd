let input = {}

function validate() {



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