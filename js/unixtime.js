var timer = null;

var input_dec = document.getElementById("input_dec");
var input_hex = document.getElementById("input_hex");
var output_jst = document.getElementById("output_jst");


input_dec.addEventListener("focus", function() {
  window.clearInterval(timer);
  var prev_value = input_dec.value;
  timer = window.setInterval(function() {
    var new_value = input_dec.value;
    if (prev_value != new_value) {
      var d = new Date(new_value * 1000);
      output_jst.value = d.toLocaleString();
    };
    prev_value = new_value;
  }, 10);
}, false);

input_hex.addEventListener("focus", function() {
  window.clearInterval(timer);
  var prev_value = parseInt(input_hex.value, 16);
  timer = window.setInterval(function() {
    var new_value = parseInt(input_hex.value, 16);
    if (prev_value != new_value) {
      var d = new Date(new_value * 1000);
      output_jst.value = d.toLocaleString();
    };
    prev_value = new_value;
  }, 10);
}, false);

input_dec.addEventListener("blur", function(){
  window.clearInterval(timer);
}, false);

input_hex.addEventListener("blur", function(){
  window.clearInterval(timer);
}, false);
