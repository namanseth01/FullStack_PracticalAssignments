var count = 0;
var valueChange = document.getElementById("counterValue");

window.onload = () => {
  if (count === 0) {
    var bt = document.querySelector("button");
    bt.disabled = true;
  } else {
    var bt = document.querySelector("button");
    bt.disabled = false;
  }
};

function increment() {
  if (count === 0) {
    var bt = document.querySelector("button");
    bt.disabled = true;
  } else {
    var bt = document.querySelector("button");
    bt.disabled = false;
  }
  valueChange.innerHTML = count++;
}
