// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

const userOddEven = prompt('Pari o dispari?');
const userNum = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(userNum)

const randomNum = getRandomInteger(1, 5);
console.log(randomNum)

function getRandomInteger (min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

let sum = userNum + randomNum;

isEven(sum); 
console.log(sum)

if (isEven(sum) && userOddEven === 0){
    console.log('hai vinto')
} else if (!isEven(sum) && userOddEven === 1){
    console.log('hai vinto')
} else {
    console.log('hai perso')
}


function isEven(number) {
	return number % 2 == 0;
}