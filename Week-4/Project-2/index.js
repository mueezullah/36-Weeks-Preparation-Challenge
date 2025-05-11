var result = document.getElementById("input");

function input(num) {
  result.value += num;
}

function calc() {
  var output = eval(result.value);
  result.value = output;
}

function clearInput() {
  result.value = "";
}
