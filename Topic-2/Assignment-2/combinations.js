let op = document.getElementById("output");
function change_text() {
  let inStr = document.getElementById("inStr").value;
  op.innerHTML = "";
  combine(inStr, "", 0);
}

const combine = (instr, outstr, index) => {
  for (var i = index; i < instr.length; i++) {
    // append the character
    outstr = outstr.concat(instr.charAt(i));

    //print the result
    op.innerHTML += outstr + ", ";

    // make a recursive call at i + 1
    combine(instr, outstr, i + 1);

    // remove the character added in the first step
    outstr = outstr.substr(0, outstr.length - 1);
  }
};
