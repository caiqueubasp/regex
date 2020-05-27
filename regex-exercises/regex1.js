//// REGULAR EXPRESSIONS TESTS

let string = "This is a simple Javascript string.";
let rex = /Javascript/;
// reg_exp.test(string);
let check = rex.test(string);

document.write(/Javascript/.test("This is a simple Javascript string.") + "\n\n");
console.log(check);

// Match - output the matched string in an array - separated by commas

let stringB = "This is a simple Javascript string.";
let rexB = /Javascript/;
// rex.test(string)
// string.match(reg_exp)
document.write(stringB.match(rexB) + "\n");
console.log(stringB.match(rexB));

//using Global method to print all match texts
// Global flag - g
// Case sensitive flag - i
// multi-line flag - m

let stringC = "This is a simple Javascript string. Javascript Javascript Javascript Javascript Javascript";
let rexC = /Javascript/gim;
document.write(stringC.match(rexC));
console.log(stringC.match(rexC) + "\n\n");

let resultC = stringC.match(rexC);
for (let index = 0; index < resultC.length; index++) {
  const element = resultC[index] + "\n";
  document.write(element);
}

// Using Regular Expressions in search and replace functions

let stringD = "This is my first Javascript Regex. Javascript Javascript Javascript Javascript Javascript";
let rexD = /Javascript/gi;
// Search method
document.write(stringC.search(rexD));
console.log(stringD.search(rexD) + "\n\n");
// Replace method
let newWord = "Typescript";
document.write(stringD.replace(rexD, newWord));

// Advanced regukar expressions/patterns using brackets & ranges of characteres

let stringE = "Hello there! cattson cetmon, cotss";
let rexE = /c[aeiou]t/gi;
document.write(stringE.match(rexE) + "\n\n");

//Number ranges with brackets
let stringF = "123 145 143 167 153 173 175 857 5640";
let rexF = /1[0-9]3/g;
document.write(stringF.match(rexF) + "\n\n");

//Alphabet ranges within brackets
let stringG = "Cat caught the rat on the mat and gave it a pat.";
let rexG = /[a-z]at/gi; //ends with an at
document.write(stringG.match(rexG) + "\n\n");

// Using pipe characteres to specify options

let stringH = "Cat caught the rat on the mat and gave it a pat.";
let rexH = /(cat|rat|mat)/gi; //ends with an at
document.write(stringH.match(rexH) + "\n\n");

//Specifying ranges/characters we don't want in the string - ^char/pattern within your square brackets
let stringI = "Cat caught the rat on the mat and gave it a pat.";
let rexI = /[^aeiou .]/gi; //ends with an at
document.write(stringI.match(rexI) + "\n\n");

//Multiple of the same thing - alphabets, digits or both - 3 caracter
//substring/words - 2 number $ 1 alphabet (small)
let stringJ = "cat mat 12t 3g 45a cA5 64A a8D";
let rexJ = /[0-9a-z][0-9][a-z]/gi; //ends with an at
document.write(stringJ.match(rexJ) + "\n\n");
