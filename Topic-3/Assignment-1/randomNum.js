let rand = Math.floor(Math.random() * 10 + 1);
let inp = prompt("Guess a number between 1 and 10:");
rand == inp
  ? document.write("<h2>Good Work</h2>" + rand)
  : document.write("<h2>Not Matched</h2>" + rand);
