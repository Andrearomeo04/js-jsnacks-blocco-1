let four_digit = prompt("inserisci un numero a 4 cifre qui sotto")

let digits = four_digit.split('')

let somma = 0

for(let i = 0; i < digits.length; i++) {
    somma += parseInt(digits[i])
}

console.log(somma)