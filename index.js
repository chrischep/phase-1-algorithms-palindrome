function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
function reverseString(term) {
  const termArray = term.split("");
  const reverseTermArray = termArray.reverse();
  const reverseTerm = reverseTermArray.join("");
 return term;
}
function isPalindrome(term){
  const reverseTerm=reverseString(term)
  if(term==reverseTerm){
    return true}
    else{return false}
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
