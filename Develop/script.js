let characterLength = 8;
let userSelection = [];
let choiceArr = [];

const lowercaseLetters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const singleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",];

const generateBtn = document.querySelector("#generate");

const writePassword = () => {
  const correctPrompts = getPrompts();
  const passwordText = document.querySelector("#password");

  if (correctPrompts) {
    const newPassword = generatePassword(choiceArr);
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
};

const generatePassword = (choiceArr) => {
  let password = "";

  for (let i = 0; i < characterLength; i++) {
    const randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }

  return password;
};

const getPrompts = () => {

if (confirm("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowercaseLetters);
}

if (confirm("Would you like uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(uppercaseLetters);
}

if (confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(singleNumbers);
}

if (confirm("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharacters);
}
    characterLength = parseInt(
      prompt(
        "How many characters do you want to include in your password? Choose from 8 - 128 characters."
      )
    );
  
if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length is a number from 8 - 128 digits. Please try again."
    );
    return false;
  } else {
    return true;
  }
};



generateBtn.addEventListener("click", writePassword);