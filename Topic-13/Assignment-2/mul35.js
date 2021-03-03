function multiples(a) {
  let x = Math.round(1000 / a);
  let s = 0;
  for (let i = 1; i <= x; i++) {
    s = s + a * i;
  }
  return s;
}
console.log(multiples(3) + multiples(5));
document.write(
  "Sum the multiples of 3 and 5 under 1000: " + (multiples(3) + multiples(5))
);
