let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = prompt("Enter a number:");

function lastElements(list, n) {
  if (n > list.length) {
    return list;
  } else {
    return list.slice(list.length - n);
  }
}

document.write("[" + lastElements(list, n) + "]");
