let str = prompt("Enter a string: ");
let ch = prompt("Enter character to search: ");

function charCount(str, ch) {
  c = 0;
  for (let pos = 0; pos < str.length; pos++) {
    if (ch == str.charAt(pos)) {
      c++;
    }
  }
  return c;
}

document.write("Count of " + ch + " in " + str + " is " + charCount(str, ch));
console.log("Count of " + ch + " in " + str + " is " + charCount(str, ch));
