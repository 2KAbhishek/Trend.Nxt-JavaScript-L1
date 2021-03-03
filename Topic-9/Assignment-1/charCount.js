let str = prompt("Enter a string: ");

function charCount(str) {
  let ch = prompt("Enter character to search: ");
  c = 0;
  for (let pos = 0; pos < str.length; pos++) {
    if (ch == str.charAt(pos)) {
      c++;
    }
  }
  return c;
}

let count = charCount(str);

document.write("Count is: " + count);
console.log("Count is: " + count);
