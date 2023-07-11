const passwordLengthEl = document.querySelector('#password-lenght')
const inputEL = document.querySelector('#password')

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

document.querySelector('#copyPassword').addEventListener('click', copyPassword)
document.querySelector('#copy').addEventListener('click', copyPassword)


generatePassword()