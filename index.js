function getValue() {
  var firstValue1 = document.querySelector("#in").value;
  var firstValue2 = document.querySelector("#out").value;

  var loveRange = Math.floor(Math.random() * 100) + 1;
  document.querySelector("#mentor").textContent =
    firstValue1 + " & " + firstValue2 + " Love Score " + loveRange + "%";
  return loveRange;
}
var theValue = loveRange;
if (theValue < 50) {
  alert("better Luck Next Time.");
} else {
  alert("Best of Luck");
}
