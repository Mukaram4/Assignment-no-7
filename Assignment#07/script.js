// 1:Write a js program to find maximum between two numbers.

// function Number() {
//     var Number1 =+ prompt("Enter a first number");
//     var Number2 =+ prompt("Enter a second number");

// if (Number1>Number2) {
//     console.log('maximum number is:',Number1);
    
// }
// else{
//     console.log('maximum number is :',Number2 );
// }

// }
// Number()

// 2: Write a js program to find a maximum between three numbers.

// function number() {

//     var Number1 =+ prompt("enter your first number:");
//     var Number2 =+ prompt("enter your Second number:");
//     var Number3 =+ prompt("enter your third number:");

//     if (Number1>Number2) {
//         console.log('maximum number is:',Number1);
        
//     }

//     else if (Number2>Number3) {
//     console.log('maximum number is:',Number2);
//     }

//     else {
//         console.log('maximum number is:',Number3);

//     }

// }
// number()

// 3: Write a program to check  whether a number is even or odd.

// function number() {
//     var Number1 =+ prompt("Enter a number:");
//     if (Number1%2==0) {

//         console.log('Your number is even:');
        
//     }
//     else{
//         console.log('Your is odd:');
//     }

// }
// number()

// 4: Write a program to check  whether a number is positive , negative or zero.

// var Number1 =+ prompt('Enter a number:');


// if (Number1 > 0 ) {
//     console.log('your number is positive');
    
// }
// else if (Number1 < 0) {
//     console.log('your number is negative');

// }

// else {

//     console.log('your number is zero');

// }
//   // Write a js program to check whether a character is alphabet or not.
//   function isAlphabet(char) {
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isAlphabet("a")); // true
//   console.log(isAlphabet("1")); // false


//   // Write a js program to input any alphabet and check whether it is vowel or consonant.
//   function isVowel(char) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u" ||
//       char == "A" ||
//       char == "E" ||
//       char == "I" ||
//       char == "O" ||
//       char == "U"
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isVowel("a")); // true
//   console.log(isVowel("b")); // false


//   // Write a js program to input any character and check whether it is alphabet, digit or special character.
//   function checkCharType(char) {
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       return "Alphabet";
//     } else if (char >= "0" && char <= "9") {
//       return "Digit";
//     } else {
//       return "Special Character";
//     }
//   }

//   // Example Usage
//   console.log(checkCharType("a")); // Alphabet
//   console.log(checkCharType("1")); // Digit
//   console.log(checkCharType("%")); // Special Character



//   // Write a js program to check whether a character is uppercase or lowercase alphabet.

//   function isUpperCase(char) {
//     if (char >= "A" && char <= "Z") {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function isLowerCase(char) {
//     if (char >= "a" && char <= "z") {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isUpperCase("A")); // true
//   console.log(isLowerCase("b")); // true


//   // Write a js program to input week number and print week day.
//   var weekNum = parseInt(prompt("Enter week number: "));
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   console.log(`Week day: ${days[weekNum - 1]}`);


//   // Write a js program to input month number and print number of days in that month.
//   var monthNum = parseInt(prompt("Enter month number: "));
//   var daysInMonth;

//   if (monthNum === 2) {
//     daysInMonth = 28;
//   } else if (
//     monthNum === 4 ||
//     monthNum === 6 ||
//     monthNum === 9 ||
//     monthNum === 11
//   ) {
//     daysInMonth = 30;
//   } else {
//     daysInMonth = 31;
//   }

//   console.log(`Number of days in month: ${daysInMonth}`);



//   // Write a js program to count total number of notes in given amount.
//   var amount = parseInt(prompt("Enter the amount: "));
//   var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
//   var count = [];

//   for (var i = 0; i < notes.length; i++) {
//     count[i] = Math.floor(amount / notes[i]);
//     amount %= notes[i];
//   }

//   for (var i = 0; i < notes.length; i++) {
//     if (count[i] !== 0) {
//       console.log(`${count[i]} notes of Rs. ${notes[i]}`);
//     }
//   }
//   // Example: If the user enters 2519, the output will be:
//   // 1 notes of Rs. 2000
//   // 1 notes of Rs. 500
//   // 1 notes of Rs. 10
//   // 1 notes of Rs. 5
//   // 4 notes of Rs. 2


//   // Write a js program to input angles of a triangle and check whether triangle is valid or not.
//   var angle1 = parseInt(prompt("Enter angle 1: "));
//   var angle2 = parseInt(prompt("Enter angle 2: "));
//   var angle3 = parseInt(prompt("Enter angle 3: "));
//   var sumOfAngles = angle1 + angle2 + angle3;
//   var isValid =
//     sumOfAngles === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0;

//   if (isValid) {
//     console.log("Triangle is valid");
//   } else {
//     console.log("Triangle is not valid");
//   }

