const passwordLengthEl = document.querySelector('#password-lenght')
const inputEL = document.querySelector('#password')
const copyPasswordEl = document.querySelector('#copyPassword')
let passwordLength = passwordLengthEl.getAttribute('value')

function generatePassword(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHGJKLMNPQRSTUVWXYZ!@#$%^&*()-_.,<>{}[]=+:;"

    let password = ""

    for (let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    inputEL.value = password
}

function copyPassword(){
    navigator.clipboard.writeText(inputEL.value)
}

passwordLengthEl.addEventListener("input", function() {
    passwordLength = passwordLengthEl.value
    generatePassword()
})

copyPasswordEl.addEventListener('click', copyPassword)


generatePassword()