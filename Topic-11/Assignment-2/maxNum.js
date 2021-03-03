var arr = [];

arr[0] = parseInt(prompt("Enter Num 1: "));
arr[1] = parseInt(prompt("Enter Num 2: "));
arr[2] = parseInt(prompt("Enter Num 3: "));
arr[3] = parseInt(prompt("Enter Num 4: "));
arr[4] = parseInt(prompt("Enter Num 5: "));

var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}

document.write("Biggest number is " + max);
console.log("Biggest number is " + max);
