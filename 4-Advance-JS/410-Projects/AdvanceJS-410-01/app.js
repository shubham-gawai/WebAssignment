//

const searchuser = (e) => {
  e.preventDefault();
  var search = document.getElementById("search").value;
  //    document.getElementById('result')=
  fetch("https://api.github.com/users/" + search)
    .then((result) => result.json())
    .then((data) => {
      document.getElementById(
        "result"
      ).innerHTML = `<div class="new-div"> <a target="_blank" href="https://github.com/${search}"> <img src=${data.avatar_url} alt="No user found"/> <a target="_blank" href="https://github.com/${search}" /> <h4>${search}</h4><p>visit profile</p></div> `;
    })
    .catch(console.log("wrong"));
};

let form = document.getElementById("myForm");
form.addEventListener("submit", searchuser);
