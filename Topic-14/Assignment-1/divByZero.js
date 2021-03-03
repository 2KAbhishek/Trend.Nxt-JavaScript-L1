let a = parseInt(prompt("Enter numerator: "));
let b = parseInt(prompt("Enter denominator: "));

try {
  if (!b) {
    // Matches +0, -0, NaN
    throw new Error("Invalid dividend " + b);
  }
  let n = a / b;
  console.log(n);
  document.write("Result is " + n);
} catch (err) {
  console.log(err);
  document.write(err);
}
