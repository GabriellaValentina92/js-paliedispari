// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let insertWord = prompt('Inserisci una parola');

let invertWord = palindromeWord (insertWord);
// debugger

 if (invertWord === insertWord){
     console.log ('la parola è palindroma')
 }  else {
     console.log ('la parola non è palindroma')
 }

// function palindromeWord (insertWord){

//     return insertWord === invertWord
// }


function palindromeWord(insertWord) {
    let splitWord = insertWord.split('').reverse('');
    let invertWord = splitWord.join('');
    // if (insertWord === invertWord){
    //     return true
    // } 
    // return false
    return invertWord;
}



