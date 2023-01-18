// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let result = ""
    for(let i = 0; i < text.length; i++){
        if(text[i] !== " "){
            if(i === (text.length - 1)){
                result += `${alphabet.indexOf(text[i].toUpperCase()) + 1}`
            } else {
                result += `${alphabet.indexOf(text[i].toUpperCase()) + 1} `
            }
        }
    }

    console.log(result)
  }

  alphabetPosition("The sunset sets at twelve o' clock.")