// Assignment Code
var generateBtn = document.querySelector("#generate");

var MINLENGTH = 8;
var MAXLENGTH = 128;


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function lengthFunc() {
    var length = prompt("Password Length:");
    length = parseInt(length, 10);
    if (Number.isInteger(length)) {
        alert("number");
        if (length < MINLENGTH) {
            alert("too short");
        }
        else if (length > MAXLENGTH) {
            alert("too long");
        }
        else {
            return length;
        }
    }
    else {
        alert("non number");
    }
}

function charTypeFunc() {
    // lowercase, uppercase, numeric, special characters
    alert("The following are for criteria for password, select confirm to add or cancel to not");
    // var charType = "";

    var charTypeArray = [];

    var lowercaseCheck = confirm("Lowercase?");
    var uppercaseCheck = confirm("Uppercase?");
    var numericCheck = confirm("Numbers?");
    var specialCharCheck = confirm("Special Characters?");

    charTypeArray.push(lowercaseCheck);
    charTypeArray.push(uppercaseCheck);
    charTypeArray.push(numericCheck);
    charTypeArray.push(specialCharCheck);

    // if (lowercaseCheck) {
    //     lowercaseCheck = "l";
    // }

    // if (uppercaseCheck) {
    //     uppercaseCheck = "u";
    // }

    // if (numericCheck) {
    //     numericCheck = "n";
    // }

    // if (specialCharCheck) {
    //     specialCharCheck = "s";
    // }

    // charType += lowercaseCheck;
    // charType += uppercaseCheck;
    // charType += numericCheck;
    // charType += specialCharCheck;
    // return charType;

    return charTypeArray;
}


function charSetFunc(characterTypeArrays) {

    charSet = "";

    if (characterTypeArrays[0]) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (characterTypeArrays[1]) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (characterTypeArrays[2]) {
        charSet += "1234567890";
    }
    if (characterTypeArrays[3]) {
        charSet += "!#$%&()*+,-./:;<=>?@[]^_`{|}\\~\'\"";
    }

    return charSet;
}


function generatePassword() {

    var length = lengthFunc();

    var password = "";

    if (length) {
        var charType = charTypeFunc();
        var charSet = charSetFunc(charType);
        console.log(charSet);

        for (let i = 0; i < length; i++) {
            char = Math.floor(Math.random() * charSet.length);

            console.log("char as a num: " + char);

            password += charSet.charAt(char);
            console.log("char as a letter: " + charSet.charAt(char));


        }
        console.log(password);
    }

    return password;






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
