// crete function to return reverse string

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"))

// To create a function that returns true if a string is a palindrome and false if it is not in JavaScript, you can use the following code:

// Here's how the function works:

// The toLowerCase() method is used to convert the string to lowercase, so that the function is not case-sensitive.
// The split(), reverse(), and join() methods are used to reverse the string.
// The function compares the original string to the reversed string. If they are the same, the function returns true, indicating that the string is a palindrome. If they are different, the function returns false, indicating that the string is not a palindrome.

function isPalindrome(str) {
  str.toLowerCase();
  return str === str.split("").reverse().join("");
}

// console.log(isPalindrome("ooloo"))

// create a function that returns a integer in reverse javascript

function reverseInt(int) {
  return parseInt(int.toString().split("").reverse().join(""));
}

// console.log(reverseInt(12345));

// Return a string with the first letter of every word capitalized
function capitalizedWords(string) {
  const words = string.split(" "); // Split the string into  an array
  const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  ); //Capitalized the first letter of each word
  return capitalizedWords.join(" "); // Join the words back into string
}

//console.log(capitalizedWords("hello madam hello"));

// Return the character that is most common in a string

function mostCommonChar(string) {
  const charCount = {}; // create an empty object to store the character count;

  // Loop thru the string and count the number of occurrences of each character
  for (let char of string) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  //Find the character with the highest count
  let mostCommon = "";
  let maxCount = 0;
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      mostCommon = char;
      maxCount = charCount[char];
    }
  }

  return mostCommon;
}

//console.log(mostCommonChar("hellloo"));

//Return the longest word in a string

function longestWord(string) {
  const words = string.split(" "); // Split the string into an array of words
  let longestWord = ""; // initialize a variable to store the longest word

  //Find the longest word
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

//console.log(longestWord("Hello madam this is celebration"));

// Split an array into chunked arrays of a specific length

function splitArray(array, chunkSize) {
  const splitArray = []; // Create an empty array to store the splited arrays
  // Loop through the array and split it into chunks of the specified size

  for (let i = 0; i < array.length; i += chunkSize) {
    splitArray.push(array.slice(i, i + chunkSize));
  }

  return splitArray;
}

//console.log(splitArray([1,2,3,4,5,6,7,8,9], 2));

// Take an array of arrays and flatten to a single array
function singleArray(arrayOfArrays) {
  return arrayOfArrays.reduce(
    (flatArray, currentArray) => flatArray.concat(currentArray),
    []
  );
}

//console.log(singleArray([[1,2], [3,4]]));

function singleArray1(arrayOfArrays) {
  return [].concat(...arrayOfArrays);
}

//console.log(singleArray1([[1,2], [3,4]]));

// Return true if anagram and false if not
function isAnagram(str1, str2) {
  //Sort the characters in string one and two
  const sortedStr1 = str1.split("").sort().join("");
  //console.log(sortedStr1)
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

// Change every letter of the string to the one that follows it and capitalize the vowels
//Z should turn to A

function letterChnages(string) {
  const vowels = "aeiou"; //Define the vowels
  let modifiedString = ""; // Create a variable to store the modified string

  //Loop thru the string and modify each character
  for (let char of string) {
    let modifiedChar = char; // Initialize a variable to store the modified character
    // Check if the character is a letter
    if (char.match(/[a-z]/i)) {
      //Shift the character to the next one in alphabet
      modifiedChar = String.fromCharCode(char.charCodeAt(0) + 1);

      //check if modified character is the vowel
      if (vowels.includes(modifiedChar)) {
        //Capitalized the modified character
        modifiedChar = modifiedChar.toUpperCase();
      }
    }
    // Add the modified character to the modified string
    modifiedString += modifiedChar;
  }

  return modifiedString;
}

console.log(letterChnages("abc"));
