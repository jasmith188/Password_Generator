// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {


  var numChar = prompt("how many characters would you like to use?");
  console.log(numChar);
  




  return "This is the password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
