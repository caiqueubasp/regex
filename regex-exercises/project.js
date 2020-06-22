// Projects

/// Project #1
// Removing extra spaces at the start or end
//of the string - trimming strings without using trim()

let str = "        Hello          ";
let rex = /(^\s+|\s+$)/g;
document.write(str.replace(rex, ""));
document.write("</br> </br>");

/// Project #2
// Email validation
// words@words.words - a@gmail.com - A@gmail.com.au
// words.words, words-words
// username@domain.com

let strEmail = "caique@gmail.com";
let rexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/i;
document.write(rexEmail.test(strEmail));
document.write("</br> </br>");
document.write(strEmail.match(rexEmail));
document.write("</br> </br>");

/// Project #3
// Mobile number validation
// +1 (555) 555-5555
//(555) 555-5555
// 555.555.5555
// 555 555 5555
// 555-555-55557
// 5555555555

let strNumber = "(555) 555-5555";
let rexNumber = /^(\+[0-9]+[\. -]?)?(\(?[0-9]{3}\)?)[\. -]?([0-9]{3})[\. -]?([0-9]{3})[\. -]?([0-9]{4})$/;
document.write(rexNumber.test(strNumber));
document.write("</br> </br>");
document.write(strNumber.match(rexNumber));
document.write("</br> </br>");
