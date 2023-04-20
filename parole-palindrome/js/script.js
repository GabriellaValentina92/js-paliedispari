// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let insertWord = prompt('Inserisci una parola');
console.log(insertWord)
let splitWord = insertWord.split('').reverse('');
console.log(splitWord)
let invertWord = splitWord.join('');
console.log(invertWord)

palindromeWord = insertWord;
// debugger

// if (insertWord === invertWord){
//     console.log ('la parola è palindroma')
// }  else {
//     console.log ('la parola non è palindroma')
// }

// function palindromeWord (insertWord){

//     return insertWord === invertWord
// }


function palindromeWord(insertWord) {
    if (insertWord === invertWord){
        console.log ('la parola è palindroma')
    }
        console.log ('la parola non è palindroma')

        return word;
}



