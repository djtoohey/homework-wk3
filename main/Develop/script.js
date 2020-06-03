// Assignment Code
var generateBtn = document.querySelector("#generate");

const MINLENGTH = 8;
const MAXLENGTH = 128;


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
        if (length < MINLENGTH) {
            alert("**NUMBER TOO SMALL** \nPlease input a number between 8 and 128 (inclusive).");
        }
        else if (length > MAXLENGTH) {
            alert("**NUMBER TOO SMALL** \nPlease input a number between 8 and 128 (inclusive).");
        }
        else {
            return length;
        }
    }
    else {
        alert("Please input a number between 8 and 128 (inclusive).");
    }
}

function charTypeFunc() {
    // lowercase, uppercase, numeric, special characters
    alert("The following are for criteria for password, select confirm to add or cancel to not");

    var charTypeArray = [];

    var lowercaseCheck = confirm("Lowercase?");
    var uppercaseCheck = confirm("Uppercase?");
    var numericCheck = confirm("Numbers?");
    var specialCharCheck = confirm("Special Characters?");

    charTypeArray.push(lowercaseCheck);
    charTypeArray.push(uppercaseCheck);
    charTypeArray.push(numericCheck);
    charTypeArray.push(specialCharCheck);

    var checkloop = "";

    for (let i = 0; i < charTypeArray.length; i++) {
        if (charTypeArray[i]) {
            checkloop += 1
        }

    }
    if (checkloop >= 1) {
        return charTypeArray;
    }
    else {
        alert("Please select at least one password criteria");
    }

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
        // console.log(charSet);

        for (let i = 0; i < length; i++) {
            char = Math.floor(Math.random() * charSet.length);

            // console.log("char as a num: " + char);

            password += charSet.charAt(char);
            // console.log("char as a letter: " + charSet.charAt(char));


        }
        console.log(password);
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
