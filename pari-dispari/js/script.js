// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

const divisibility = prompt('Pari o dispari?');
const userNum = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(userNum)

const randomNum = getRandomInteger(1, 5);
console.log(randomNum)

function getRandomInteger (min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
// debugger

let sum = userNum + randomNum;

isEvenOdd(sum); 
console.log(sum)


if (divisibility == isEvenOdd(sum)){
    console.log('hai vinto')
} else {
    console.log('hai vinto')
}


function isEvenOdd(number) {
    if (number % 2 == 0) {
        return 'pari';
    }
	return 'dispari';
}