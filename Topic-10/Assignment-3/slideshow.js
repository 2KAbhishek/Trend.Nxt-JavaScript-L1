let pos = 3;
let nex = document.getElementById("nex");
let pre = document.getElementById("pre");

function prev() {
  pos >= 0 ? pos-- && update() : pos;
}

function next() {
  pos <= 5 ? pos++ && update() : pos;
}

function update() {
  pre.disabled = pos === 0;
  nex.disabled = pos === 5;
  document.getElementById("cur").src = "images/img" + pos + ".jpg";
}

update();
