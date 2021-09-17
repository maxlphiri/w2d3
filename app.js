/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
    if(num1 > num2){
      return num1
    } else {
      return num2
    }
  };
  
  console.log(maxOfTwoNumbers(13,8))
  
  
  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (int1, int2, int3) => {
    let max = Math.max(int1, int2, int3);
    return max;
  };
  
  console.log(maxOfThree(20,30,40))
  /*
  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (arg) => {
      var arg = arg.toLowerCase()
      let vowels = (['a', 'e', 'i', 'o', 'u'])

      for (let i = 0; i <= vowels.length; i++){
        if (arg != vowels[i]) {
            
        }
        return true;
    }
    return false;
};
  console.log(isCharacterAVowel('U'))
  /*
  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  */
  
  sumArray = () => {
    const sum =  [23, 12, 19, 87]
    console.log(sum.reduce((a, b) => a + b, 0))
  
      }
  sumArray()
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  argCount = (arg1,arg2,arg3,arg4,arg5) => {
    for (var i=0;i<arguments.length;i++) {
      console.log(arguments[i]);
  }
  };
console.log(argCount.length)
      
    
  /*
  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = () => {
    const str = ['beats','lo-fi', 'Love','I'];
    const flipped = str.reverse()
    console.log(flipped)
   
  };

  reverseString()

  /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (wrd) => {
    var wrdSplit = wrd.split(' ');
  var longestWord = 0;
  for(var i = 0; i < wrdSplit.length; i++){
    if(wrdSplit[i].length > longestWord){
	longestWord = wrdSplit[i].length;
     }
  }
  console.log(longestWord);
}
findLongestWord('Mango aku Malawi ndi okoma kwambiri')
  /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = () => {
    // ADD YOUR CODE HERE
  };

