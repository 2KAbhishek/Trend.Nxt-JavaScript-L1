function fib() {
  let a = [0, 1];
  for (let i = 2; i < 100; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a;
}

fib().forEach((e) => {
  console.log(e);
  document.write(e + "<br>");
});
