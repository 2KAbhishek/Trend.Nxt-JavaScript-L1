const varName = prompt("Enter variable name");
const val = prompt("Enter variable name");
this[varName] = val;

console.log(varName + " = " + this[varName]);
document.write("<h2>" + varName + " = " + this[varName] + "</h2>");
