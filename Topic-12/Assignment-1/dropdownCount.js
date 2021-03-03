function dropdownCount() {
  let x = document.getElementById("mySelect").options.length;

  let a = new Array(x);
  for (let i = 0; i < x; i++) {
    a[i] = document.getElementById("mySelect").options[i].text;
  }
  alert("Count :  " + x + "\n" + "Elements : " + a);
}

dropdownCount();
