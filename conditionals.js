// JOSEPH P. PASAOA

/*
1. Write a block of code that checks and logs whether variables are equal or not.

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

4. Do question 3 again but this time use a `switch` statement.

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

7. Write a block of code that logs whether a given number is even or odd.

8. Do question 7 again but use a ternary.

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
*/

console.log("1. Write a block of code that checks and logs whether variables are equal or not.");
let TestVar1a = 900;
let TestVar1b = 9000;
//
TestVar1a === TestVar1b ? console.log(TestVar1a + " and " + TestVar1b + " are equal.") : console.log(TestVar1a + " and " + TestVar1b + " are not equal.");
//
console.log("");


console.log("2. Write a block of code that logs which of two number variables is larger.");
let TestVar2a = 800;
let TestVar2b = 8000; // "An unwanted string";
//
let larger;
if (TestVar2a > TestVar2b) {
  larger = TestVar2a;
  console.log("The greater number of " + TestVar2a + " and " + TestVar2b + " is " + larger + ".");
} else if (TestVar2b > TestVar2a) {
  larger = TestVar2b;
  console.log("The greater number of " + TestVar2a + " and " + TestVar2b + " is " + larger + ".");
} else if (TestVar2a === TestVar2b) {
  console.log("The numbers are equal. The numbers were both " + TestVar2a + ".");
} else {
  console.log("Hmm. Something's fishy here. Please check your numbers and try again.");
}
//
console.log("");


console.log('3. Create a string variable with a language code (e.g. "english", "spanish", "german").');
let speaking = "Korean";
//
if (speaking === "English") {
  console.log("Hello, world");
} else if (speaking === "Spanish") {
  console.log("Hola, mundo");
} else if (speaking === "French") {
  console.log("Bonjour, le monde");
} else if (speaking === "Korean") {
  console.log("안녕하세요 세상");
} else if (speaking === "Japanese") {
  console.log("こんにちは世界");
} else {
  console.log("Sorry, I don't know that language.");
}
//
console.log("");


console.log("4. Do question 3 again but this time use a `switch` statement.");
//
let talking = "Mongolian";
switch (talking) {
  case "Spanish":
    console.log("Hola, mundo");
    break;
  case "French":
    console.log("Bonjour, le monde");
    break;
  case "Korean":
    console.log("안녕하세요 세상");
    break;
  case "Japanese":
    console.log("こんにちは世界");
    break;
  default:
    console.log("Hello, world");
    break;
}
//
console.log("");


console.log("5. Create a variable numGrade that will contain a numeric grade (out of 100).");
let numGrade = 85;
//
if (numGrade >= 90) {
  console.log("A");
} else if (numGrade >= 80) {
  console.log("B");
} else if (numGrade >= 70) {
  console.log("C");
} else if (numGrade >= 60) {
  console.log("D");
} else if (numGrade >= 0) {
  console.log("F");
} else {
  console.log("Please re-enter number grade.");
}
//
console.log("");


console.log("6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.");
let animalName = "horse"; // HAS TO BE SINGULAR FORM INPUTED HERE
let numberOfAnimals = 1;
//
if (animalName === "cat" || animalName === "dog" || animalName === "goose" || animalName === "sheep") {
  if (numberOfAnimals === 1) {
    console.log(numberOfAnimals + " " + animalName);
  } else {
    if (animalName === "goose") {
      console.log(numberOfAnimals + " geese");
    } else if (animalName === "sheep") {
      console.log(numberOfAnimals + " sheep");
    } else {
      console.log(numberOfAnimals + " " + animalName + "s");
    }
  }
} else {
  console.log("Sorry, I'll only accept the [cat], the [dog], the [goose], or the [sheep].");
}
//
console.log("");


console.log("7. Write a block of code that logs whether a given number is even or odd.");
let givenNum = 8.0; // 1.5;
//
let OOE = givenNum % 2;
if (OOE === 0) {
  console.log(givenNum + " is even.");
} else if (OOE === 1){
  console.log(givenNum + " is odd.");
} else {
  console.log(givenNum + " is neither odd nor even.")
}
//
console.log("");


console.log("8. Do question 7 again but use a ternary.");
let anotherNum = 99.00; // 12.3;
//
let anotherOOE = anotherNum % 2;
switch (anotherOOE) {
  case 0:
    console.log(anotherNum + " is even.");
    break;
  case 1:
    console.log(anotherNum + " is odd.");
    break;
  default:
    console.log(anotherNum + " is neither odd nor even.");
    break;
}
//
console.log("");


console.log("9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.");
let lastNum = -12345; // "not a number";
//
if (lastNum === 0) {
  console.log(lastNum + " is equal to 0. That is all.");
} else if (lastNum > 0) {
  console.log(lastNum + " is positive.");
} else if (lastNum < 0) {
  console.log(lastNum + " is negative.");
} else {
  console.log(lastNum + " confuses me.");
}
//
