let a = [9, 4, 2, 8, 1];
let n = a.length;
//using bubble sort
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (a[i] > a[j]) {
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
  }
}
console.log("Bubble Sort :    " + a);
document.write("Bubble Sort :    " + a + "<br>");

//insertion sort

const len = a.length;
for (let i = 0; i < len; i++) {
  let el = a[i];
  let j;

  for (j = i - 1; j >= 0 && a[j] > el; j--) {
    a[j + 1] = a[j];
  }
  a[j + 1] = el;
}

console.log("Insertion Sort : " + a);
document.write("Insertion Sort : " + a);
