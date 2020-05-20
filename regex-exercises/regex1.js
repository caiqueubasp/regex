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
