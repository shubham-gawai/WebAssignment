//

function addItems() {
  var item = document.getElementById("item");
  if (item.value === "") {
    alert("Please enter your Item");
    return;
  }

  let liRef = document.createElement("li");

  liRef.innerHTML = `${
    document.getElementById("item").value
  }<button style="margin:12px" onclick="deleteItems(this)">delete</button>`;

  document.getElementById("unorderedRef").appendChild(liRef);
  document.getElementById("item").value = "";
}

function deleteItems(e) {
  e.parentElement.remove();
}
