// Assignment code here

// Ref to the HTML "generate" id for my red button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Setting up prompts for password criteria.
  //  Password length 8-128; letters (lower/uppercase), numbers and special characters
  //  They must choose at least one of the criteria! const started below 
  //  Voila, password generated and displayed.
}

const lowercaseLetters = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
const uppercaseLetters = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
const singleNumbers = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";


// This is my code for the writePassword function 
function writePassword() {
  var password = generatePassword(); // Where's the generatePassword function? It's called but not yet defined.
  var passwordText = document.querySelector("#password"); // This is telling the computer where to display the final result 

  passwordText.value = password; //This is like saying "the total value is....to this entire function"

}

// When the user clicks on the red button it will call the writePassword function code
generateBtn.addEventListener("click", writePassword);
