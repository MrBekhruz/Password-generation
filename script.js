const passwordBOx = document.getElementById("password");
const length = 15;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const number = "123456789"
const symbol = "!@#$%^&*()_+[{}]<>+-*/=?|";

const allCharacters = upperCase + lowerCase + number + symbol;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];

    }
    passwordBOx.value = password;
}

function copyPasword(){
    passwordBOx.select();
    document.execCommand("copy")
}