// Get the input from user
let inp = prompt("Enter the limit");

let res = [1];
let k = 1;

/* Check if number till range is valid */
for (let curNum = 2; curNum <= inp; curNum++) {
  let isPrime = true;
  for (let divNum = 2; divNum <= Math.sqrt(curNum); divNum++) {
    if (curNum % divNum == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) res[k++] = curNum;
}
console.log(res);
document.write(res);
