//
function compare(a, b) {
  if (a.population > b.population) {
    return -1;
  }
  if (a.population < b.population) {
    return 1;
  }
  return 0;
}

countries_data.sort(compare);

let countries = {};
let sortable = [];

function lang() {
  countries_data.map((value) => {
    value.languages.map((language) => {

      if (countries[language] != undefined) {
        countries[language] = countries[language] + 1;
      } 
      else {
        countries[language] = 1;
      }

    });
  });

  for (var l in countries) {
    sortable.push([l, countries[l]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];

  });

}

lang();

function myFunction() {
  var table = document.getElementById("tableid");

  sortable.map((value, ind) => {

    table.insertRow(ind);
    let row = table.insertRow(ind);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.classList.add("middletd");
    var cell3 = row.insertCell(2);
    cell1.innerHTML = value[0];
    cell2.innerHTML = `<div class='tablediv' style='width:${value[1]}%'> </div>`;

    cell3.innerHTML = value[1];

  });
}
myFunction();


let worldpopulation = 7693165599;
var populationtable = document.getElementById("populationtable");

function table_population() {
  countries_data.map((value, ind) => {
    let row = populationtable.insertRow(ind + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.classList.add("middletd");
    var cell3 = row.insertCell(2);
    cell1.innerHTML = value.name;
    let percent = (value.population / worldpopulation) * 100;
    cell2.innerHTML = `<div class="tablediv" style='width:${percent}%'></div>`;
    cell3.innerHTML = value.population;

  });
}
table_population();

document.getElementById("populationtable").style.display = "none";
document.getElementById("tableid").style.display = "none";

var c = document.createElement("p");

function showpop() {
  document.getElementById("tableid").style.display = "none";
  document.getElementById("populationtable").style.display = "block";

  c.innerHTML = "10 Most populated countries in the world";
  document.getElementById("new-ele").appendChild(c);
}

function showlang() {
  document.getElementById("populationtable").style.display = "none";
  document.getElementById("tableid").style.display = "block";

  c.innerHTML = "10 Most Spokn languages in the world";
  document.getElementById("new-ele").appendChild(c);
}
