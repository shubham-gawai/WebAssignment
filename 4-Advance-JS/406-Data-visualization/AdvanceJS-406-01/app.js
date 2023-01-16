//

const showres=(e)=>{
    
    display(e.target.value);
 }

 function display(element){
     const filter = countries_data.filter((value)=>{
         if(value.name.startsWith(element)){
             return true;
         }
         return false;
     });
 
     const parent = document.getElementById("grid");
     
     parent.innerHTML="";

     filter.forEach((e)=>{

         const new_row=document.createElement("div");
         const new_countries=document.createElement("p");
 

         const c = document.getElementById("no-of-countries");
         c.innerHTML = `Countries starts with ${element} are ${filter.length}`;


         new_countries.innerHTML=e.name;

         new_row.appendChild(new_countries);
         parent.appendChild(new_row);
     });
 }
 
 document.getElementById("search-form").addEventListener("keyup",showres);