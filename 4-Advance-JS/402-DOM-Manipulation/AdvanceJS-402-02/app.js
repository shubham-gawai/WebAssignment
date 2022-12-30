
// new elements created ouside the function coz of loop : now function only will be called once a onclick


var c = document.createElement("img");
var d = document.createElement("h3");



function chnageimage(){

    d.innerHTML="Image Element Added.";
    
    c.src = "https://geekster.in/images/logo.svg";

    // Append to another element:
    document.getElementById("new-div").appendChild(d);
    document.getElementById("new-div").appendChild(c);
}
