let odd_numbers = [];

for(let i = 0; i < 6; i++) {
    let num = prompt("inserisci un numero qui sotto")

    if (num % 2 !== 0) {
        odd_numbers.push(`${num}`);
    }
}

console.log(`${odd_numbers}`)