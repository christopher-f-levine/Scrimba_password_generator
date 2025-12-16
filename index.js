const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let usableCharacters = []

let password1El = document.getElementById('generated-password-1')
let password2El = document.getElementById('generated-password-2')

let includeNumbersEl = document.getElementById("include-numbers-el")
let includeSpecialCharactersEl = document.getElementById("include-characters-el")

const slider = document.getElementById("length")
const output = document.getElementById("lengthValue-el")

slider.addEventListener("input", () => {
    output.textContent = slider.value

  })


 output.textContent = slider.value;

// edit the below code block to enable character restraints from toggle menu in UI

function determineUsableCharacters() {
    let includeNumbers = includeNumbersEl.checked
    let includeSpecial = includeSpecialCharactersEl.checked
    usableCharacters = letters
    if (includeNumbers) {
        for (let i=0; i < numbers.length; i++) {
        usableCharacters.push(numbers[i])
        }
    }
    if (includeSpecial) { 
        for (let i=0; i < specialCharacters.length; i++) {
        usableCharacters.push(specialCharacters[i])
        }
    }
    return usableCharacters
    }


// generates a random integer between 1 and usable characters.length
function generateRandomNumber() {
    return Math.floor(Math.random() * usableCharacters.length)
}

// uses the randomly generated integer to select from a variable list of usable characters
function renderRandomCharacterfromSet() {
    return usableCharacters[generateRandomNumber()]
}

// generates a password of variable length
function generateRandomPassword() {
    let passwordLength = slider.value
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password = password + renderRandomCharacterfromSet()
    }
    return password
}

function renderPasswords() {
    usableCharacters = determineUsableCharacters()
    password1El.textContent = generateRandomPassword()
    password2El.textContent = generateRandomPassword()
}
