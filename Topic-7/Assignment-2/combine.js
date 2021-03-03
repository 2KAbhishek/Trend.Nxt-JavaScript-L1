let list1 = [1, 2, 3];
let list2 = ["a", "b", "c"];

function combine(a, b) {
  let res = [];
  let j = 0,
    k = 0;
  for (let i = 0; i < a.length; i++) {
    res.push(a[j++]);
    res.push(b[k++]);
  }
  return res;
}

console.log(combine(list1, list2));
document.write("[" + combine(list1, list2) + "]");
