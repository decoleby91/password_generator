// Array of special characters to be included in password
let specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase letters to include in the password
let upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Variable for generating a random number from an array, I'll be using 'Math.random()'
let randomNumber = Math.floor(Math.random(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)*numericCharacters.length); 


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element 
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
let password = generatePassword();
let passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Add event listener to generate a button
generateBtn.addEventListener('click', writePassword);