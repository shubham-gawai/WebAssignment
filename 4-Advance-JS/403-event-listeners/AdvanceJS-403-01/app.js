//

document.getElementById("para").style.display = "none";

function inputKey(x) {
  let pref1 = document.getElementById("pid1");
  pref1.innerHTML = `You Pressed <span>${x.key}</span>`;

  document.getElementById("para").style.display = "block";

  let pref2 = document.getElementById("para");
  pref2.innerHTML = `<span class="new-span">${x.keyCode}</span>`;
}
