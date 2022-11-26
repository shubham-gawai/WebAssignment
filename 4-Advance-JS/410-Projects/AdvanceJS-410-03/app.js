
const findMeal = (e) => {
    e.preventDefault();
    var search = document.getElementById("search").value;

  let api = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+search)

  api.then((value) => {
    return value.json()
  }).then((value) =>{
    // console.log(value);
    document.getElementById(
        "new-div"
      ).innerHTML = "hi I am working";

      `<p>${value.meals.strMeal}</p><img src="${value.meals.strMealThumb}" alt="not found"/>`
    
  });

}

let form = document.querySelector('input');
form.addEventListener("keyup", findMeal);

