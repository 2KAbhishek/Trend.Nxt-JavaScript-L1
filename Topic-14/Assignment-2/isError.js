function isError(input) {
  return input instanceof Error || toString.call(input) === "[object Error]";
}

console.log(isError(new Error(100)));
console.log(isError(25));

document.write(isError(new Error(100)));
document.write(isError(26));
