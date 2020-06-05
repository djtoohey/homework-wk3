// CONSTANTS
// setting minimum length and maximum length to constants
const MINLENGTH = 8;
const MAXLENGTH = 128;

// BUTTONS
// setting generateBtn to the #generate button
var generateBtn = document.querySelector("#generate");
// setting copyBtn to the #copy button
var copyBtn = document.querySelector("#copy");

// EVENT LISTENERS
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to copy button
copyBtn.addEventListener("click", copy);


// Write password to the #password input
function writePassword() {
    // setting password to the return of generate password
    var password = generatePassword();

    // setting passwordText to the password text area
    var passwordText = document.querySelector("#password");

    // setting the password text area to the password
    passwordText.value = password;

}


// function to generate the password
function generatePassword() {
    // setting length variable to the return of length function
    var length = lengthFunc();

    // setting password to an empty string
    var password = "";

    // checking if the length variable is true (has any value in it)
    if (length) {
        // setting charType to the charType function
        var charType = charTypeFunc();
        // setting the character set to the charSet function 
        var charSet = charSetFunc(charType);

        // for loop to set the password, loops the amount of times that length is set to
        for (let i = 0; i < length; i++) {
            // sets char to a random number between 0 and the length of character set
            char = Math.floor(Math.random() * charSet.length);

            // add the character to password by setting the character to a character from charSet at the position of char
            password += charSet.charAt(char);

        }
    }
    // returning password to password in write password
    return password;

}


// function to set the length of the password
function lengthFunc() {
    // prompting user for the length of the password
    var length = prompt("Password Length:");

    // setting the length to an int with a decimal number (base 10)
    length = parseInt(length, 10);

    // check if length is an interger 
    if (Number.isInteger(length)) {
        // check if length is less than the minimum length, if it is then alert the user to put in a relevant number
        if (length < MINLENGTH) {
            alert("**NUMBER TOO SMALL** \nPlease input a number between 8 and 128 (inclusive).");
        }
        // check if length is more than the maximum length, if it is then alert the user to put in a relevant number
        else if (length > MAXLENGTH) {
            alert("**NUMBER TOO LARGE** \nPlease input a number between 8 and 128 (inclusive).");
        }
        // otherwise, return the length to generatePassword
        else {
            return length;
        }
    }
    // if not an interger, alert to input a number 
    else {
        alert("Please input a number between 8 and 128 (inclusive).");
    }
}


// function to set the  of the password
function charTypeFunc() {
    // alerting the user to the following prompts
    alert("The following are for criteria for password, select confirm to add or cancel to not");

    // setting the character type array to an empty array
    var charTypeArray = [];

    // setting if lowercase, uppercase, numeric and/or special characters are wanted in the password
    var lowercaseCheck = confirm("Lowercase?");
    var uppercaseCheck = confirm("Uppercase?");
    var numericCheck = confirm("Numbers?");
    var specialCharCheck = confirm("Special Characters?");

    // adding the answers to the character type array
    charTypeArray.push(lowercaseCheck);
    charTypeArray.push(uppercaseCheck);
    charTypeArray.push(numericCheck);
    charTypeArray.push(specialCharCheck);

    // VALIDATION
    // setting an empty string
    var checkloop = "";

    // for loop adding numbers to the checkloop variable if the position of the charTypeArray is true
    for (let i = 0; i < charTypeArray.length; i++) {
        if (charTypeArray[i]) {
            checkloop += 1
        }

    }

    // if the checkloop is greater or equal to 1, return the array
    if (checkloop >= 1) {
        return charTypeArray;
    }
    // otherwise, alert user to select at least one criteria
    else {
        alert("Please select at least one password criteria");
    }
}


// function to set the characters that can be in the password, taking in a characterTypeArray
function charSetFunc(characterTypeArray) {
    // setting charSet to an empty string
    charSet = "";

    // checking if the position is true, then adding the corrisponding string to charSet
    // lowercase
    if (characterTypeArray[0]) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    // uppercase
    if (characterTypeArray[1]) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    // numbers
    if (characterTypeArray[2]) {
        charSet += "1234567890";
    }
    // special characters
    if (characterTypeArray[3]) {
        charSet += "!#$%&()*+,-./:;<=>?@[]^_`{|}\\~\'\"";
    }

    // returning charSet to generatePassword
    return charSet;
}


// function to copy the password
function copy() {
    // selecting password to then copy it to the clip board
    password.select();
    document.execCommand("copy");
}
