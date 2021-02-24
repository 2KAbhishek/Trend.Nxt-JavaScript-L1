function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

let inp = prompt("Enter string to convert to Titile Case");
let out = titleCase(inp);

console.log(out);
document.write("<h2>" + out + "</h2>");
