let usernameError = document.getElementById('user');
let emailError = document.getElementById('email');
let passwordError = document.getElementById('password');
let passwordCheckError = document.getElementById('password-check');

function validateName(){
    let username = document.getElementById('user').value;

    if(username.length == 0){
        usernameError.innerHTML = 'Username is required';
        return false;
    }
    if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        usernameError.innerHTML = 'Write valid username';
        return false;
    }
    usernameError.innerHTML = 'valid';
    return true;
}