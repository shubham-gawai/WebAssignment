//
var billAmount = document.getElementById("billAmount");
var serviceQuality = document.getElementById("serviceQuality");
var numPeople = document.getElementById("numPeople");

document.getElementById("spanref").style.display = "none";
document.getElementById("h1ref").style.display = "none";
document.getElementById("h6ref").style.display = "none";

function calculateAmt() {
  if (billAmount.value === "") {
    alert("enter your Bill Amount");
    return;
  } else if (serviceQuality.value === "") {
    alert("select your Service Quality");
    return;
  } else if (numPeople.value === "") {
    alert("enter No. of People");
    return;
  }

  document.getElementById("spanref").style.display = "block";
  document.getElementById("h1ref").style.display = "block";
  document.getElementById("h6ref").style.display = "block";

  let total = parseFloat(
    (billAmount.value * serviceQuality.value) / numPeople.value
  ).toFixed(2);

  let h1ref = document.getElementById("h1ref");
  h1ref.innerHTML = `<sup>$</sup>${total}`;

  billAmount.value = "";
  serviceQuality.value = "";
  numPeople.value = "";
}
