// 


const autosearch = (e) => {
  const value = e.target.value;
  displaySearchResults(value);
};
const displaySearchResults = (searchQuery = "") => {
  const filter = emojiList.filter((e) => {
    if (e.description.indexOf(searchQuery) !== -1) {
      return true;
    }
    if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }
  });
  
  const parent = document.getElementById("search_result_container");
  parent.innerHTML = "";
  filter.forEach((e) => {
    const new_row = document.createElement("tr");
    const new_emoji = document.createElement("td");
    const new_aliases = document.createElement("td");
    const new_desc = document.createElement("td");
    new_emoji.innerHTML = e.emoji;
    new_aliases.innerHTML = e.aliases.join(",");
    new_desc.innerHTML = e.description;

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_desc);
    parent.appendChild(new_row);
  });
};

document.getElementById("search-form").addEventListener("keyup", autosearch);

displaySearchResults();
