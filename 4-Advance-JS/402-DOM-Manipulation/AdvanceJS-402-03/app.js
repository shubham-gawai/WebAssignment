alert('hi');


var unorder = document.createElement("ul");
var list = document.createElement("li");
var d = document.createElement("button");

function chnageimage(){
    c.innerHTML=document.getElementById('input-el').value;
    
    d.innerHTML = "delete";

    // Append to another element:
    document.getElementById("new-div").appendChild(c);
    document.getElementById("new-div").appendChild(d);
    
}


// D: Deleting a post
let deletePost = function (e) {
    e.parentElement.parentElement.remove();
    console.log('delete', e.parentElement.parentElement);
  };