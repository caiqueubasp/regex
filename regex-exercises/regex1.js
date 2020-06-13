const container = document.querySelector("#container");

//// REGULAR EXPRESSIONS TESTS

let string = "This is a simple Javascript string.";
let rex = /Javascript/;
// reg_exp.test(string);
let check = rex.test(string);

container.innerHTML = /Javascript/.test("This is a simple Javascript string.") + "\n\n";
console.log(check);

// Match - output the matched string in an array - separated by commas

let stringB = "This is a simple Javascript string.";
let rexB = /Javascript/;
// rex.test(string)
// string.match(reg_exp)
container.innerHTML = stringB.match(rexB) + "\n";
console.log(stringB.match(rexB));

//using Global method to print all match texts
// Global flag - g
// Case sensitive flag - i
// multi-line flag - m

let stringC = "This is a simple Javascript string. Javascript Javascript Javascript Javascript Javascript";
let rexC = /Javascript/gim;
container.innerHTML = stringC.match(rexC);
console.log(stringC.match(rexC) + "\n\n");

let resultC = stringC.match(rexC);
for (let index = 0; index < resultC.length; index++) {
  const element = resultC[index] + "\n";
  container.innerHTML = element;
}

// Using Regular Expressions in search and replace functions

let stringD = "This is my first Javascript Regex. Javascript Javascript Javascript Javascript Javascript";
let rexD = /Javascript/gi;
// Search method
container.innerHTML = stringC.search(rexD);
console.log(stringD.search(rexD) + "\n\n");
// Replace method
let newWord = "Typescript";
container.innerHTML = stringD.replace(rexD, newWord);

// Advanced regukar expressions/patterns using brackets & ranges of characteres

let stringE = "Hello there! cattson cetmon, cotss";
let rexE = /c[aeiou]t/gi;
container.innerHTML = stringE.match(rexE) + "\n\n";

//Number ranges with brackets
let stringF = "123 145 143 167 153 173 175 857 5640";
let rexF = /1[0-9]3/g;
container.innerHTML = stringF.match(rexF) + "\n\n";

//Alphabet ranges within brackets
let stringG = "Cat caught the rat on the mat and gave it a pat.";
let rexG = /[a-z]at/gi; //ends with an at
container.innerHTML = stringG.match(rexG) + "\n\n";

// Using pipe characteres to specify options

let stringH = "Cat caught the rat on the mat and gave it a pat.";
let rexH = /(cat|rat|mat)/gi; //ends with an at
container.innerHTML = stringH.match(rexH) + "\n\n";

//Specifying ranges/characters we don't want in the string - ^char/pattern within your square brackets
let stringI = "Cat caught the rat on the mat and gave it a pat.";
let rexI = /[^aeiou .]/gi; //ends with an at
container.innerHTML = stringI.match(rexI) + "\n\n";

//Multiple of the same thing - alphabets, digits or both - 3 caracter
//substring/words - 2 number $ 1 alphabet (small)
let stringJ = "cat mat 12t 3g 45a cA5 64A a8D";
let rexJ = /[0-9a-z][0-9][a-z]/gi; //ends with an at
container.innerHTML = stringJ.match(rexJ) + "\n\n";

// --------------------------------------------------
// Metacharacteres - to enhance your regular expressions
// Wildcard character - . (periodo)
// Any single character - alphabets (small & caps),
// Numbers, especial characteres, spaces - except newline or line terminator

let stringK = "ca5%t";
let rexK = /c...t/g;
container.innerHTML = rexK.test(stringK) + "\n\n";

// Word character - \w everthing - a-z, A-Z, 0-9, underscore -
// no special characters/spaces/new line
// Non-word character - \W - everthing except what was in the word character set -
// special characters, spaces, periods, newline, etc.

let stringL = "a@1";
let rexL = /\w\W\w/;
container.innerHTML = rexL.test(stringL) + "<br>";

// Digits character - \d - every digit - 0-9
// Non digits character - |D - anything other than digits -
// like using the ^
let stringM = "4521ttre9584";
let rexM = /[\d\D]/g;
container.innerHTML = stringM.match(rexM) + "<br>";

// Space character - \s - whitespace - space, tab, carriage return
// newline, vertical tab, form feed
// Non-whitwspace character - \S - anything other than whitespace
// - alphabets, special characters, _, digits
let stringN = "4521tt re9584";
let rexN = /\s\S/g;
container.innerHTML = stringN.match(rexN) + "<br>";
container.innerHTML = rexN.test(stringN) + "<br>";

// beginning & the ending character - \b - word, not the string
//
//
let stringO = "good cat";
let rexO = /\bg/gi;
var mywordO = stringO.search(rexO);
container.innerHTML = stringO.match(rexO) + "<br>";
container.innerHTML = (stringO.search(rexO), mywordO + "<br>");
container.innerHTML = rexO.test(stringO) + "<br>";

// Anchors, Quantifaiers etc
// Anchors - start & end - ^, $
// start anchor - ^
// end anchor - $
// matching - password, username, email, variable
// ^paterning$ - string should contain the pattern and only
// that pattern - nothing before or after the pattern - pattern matching - password,
// username, email, variable
let stringP = "Good cat, good1";
let rexP = /^[a-z]$/gi;
container.innerHTML = stringP.match(rexP) + "<br>";
container.innerHTML = stringP.search(rexP) + "<br>";
container.innerHTML = rexP.test(stringP) + "<br>";

// Quantifiers
// + - one or more (infinity)
// * - zero or more
// ? - zero or one (optional)
// {} - specifing number of times something can be repeated - a range
// 2 to 3 times, 2 to 10 times -
// only 2 times

let stringQ = "Good cat, good1";
let rexQ = /^_[a-zA-Z][0-9]$/;
container.innerHTML = stringQ.match(rexQ) + "<br>";
container.innerHTML = stringQ.search(rexQ) + "<br>";
container.innerHTML = rexQ.test(stringQ) + "<br>";

// starts with a underscore, has one or more letters
// and ends with one digit
let stringR = "_ah$oejd,s99dhd(((whgqç@8";
let rexR = /^_\S*\$/;
container.innerHTML = stringR.match(rexR) + "<br>";
container.innerHTML = stringR.search(rexR) + "<br>";
container.innerHTML = rexR.test(stringR) + "<br>";

/// TESTE EMAIL REGEX
let stringEmail = "caique@gmail.com";
let rexEmail = /\d$/;
container.innerHTML = stringEmail.match(rexEmail) + "<br>";
container.innerHTML = stringEmail.search(rexEmail) + "<br>";
container.innerHTML = rexEmail.test(stringEmail) + "<br>";

///
let stringS = "abb64625"; //letters repetead 2  to 3 times followed
// by digits repetead 3 to 5 times
let rexS = /^[a-z]{2,}\d{3,5}$/;
console.log(rexS.test(stringS));

//// Literal/Special characters, unicode, u flag, etc
// Mathing literal/special characters
// \ ^$ [ ] () + * ? . | {}

let stringT = "Hello (Greeting)";
let rexT = /\(\w+\)/gi;
console.log(stringT.match(rexT));

// RegExp obj, properties, methods

let stringU = "Cat cat cat";
let rexU = new RegExp("cat", "gi");
document.write(stringU.match(rexU));

// RegExp  properties
// Constructor - reference to the constructor function of the
// expression

let strV = " ";
let space = "\n";
let rexV = new RegExp("(c|p|m)at", "gi");
let cons = rexV.constructor;
let gl = rexV.global;
let ig = rexV.ignoreCase;
let multi = rexV.multiline;
document.write(cons, space, gl, space, ig, space, multi);
document.write("\n");

// S flag - wilcard - . - everthing except newline - with s flag
// - make it match literally everything

let stringX = "\n";
let rexX = /./s;
document.write(rexX.test(stringX));
document.write("\n");

// DotAll property - ES2018 update
// Specify whether the s flag is used
// or not in the regular expression - afeccts the . (wilcard)
// - multiline ^ $

let stringY = " ";
let rexY = /./s;
document.write(rexY.dotAll);
document.write("\n");

// Regex methods
// test method
// toString method - return string value of the
// regular expression

let stringW = "Cat mat rat mat on the rat ";
let rexW = new RegExp("(c|m|r)at", "gi");
let src = rexW.toString();
document.write(src);
document.write("\n");
document.write(rexW.exec(stringW));
document.write("<br> <br>");

// Lazy and greedy matches
// greedy matching - maximum possible match
// lazy matching - minimum possible match

// greedy matching
let stringZ = "Hello there (This is a gretting), how are you? (This is also a gretting)";
let rexZ = /\(.+\)/;
document.write(rexZ.exec(stringZ));
document.write("<br>");
document.write(stringZ.match(rexZ));
document.write("<br> <br>");

//Lazy matching
// ? - use AFTER the quantifier - a*?, a+?, a??
// - active lazy mode
let stringZB = "Hello there (This is a gretting), how are you? (This is also a gretting)";
let rexZB = /\(.+?\)/g;
document.write(rexZB.exec(stringZB));
document.write("<br>");
document.write(stringZB.match(rexZB));
document.write("<br> <br>");

//
let stringZC = "123 456 7890";
let rexZC = /\d+? \d+? \d+?/g;
document.write(stringZC.match(rexZC));
document.write("<br> <br>");
