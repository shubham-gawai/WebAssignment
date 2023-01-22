// 
    var inputValue = document.querySelector(".input");
    var city = document.querySelector("#city");
    var windspeed = document.querySelector(".windspeed");
    var temp = document.querySelector(".temp");
    var desc = document.querySelector(".desc");
    var apiKey = "1fdbf0a2f50cd3d40b9b0a5017429296";

function input (e){
    e.preventDefault();
    
    var word=document.getElementById('inputValue').value;
    // console.log(word);

    if(word===""){
        alert("enter a city name"); 
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}`)
    .then((response)=>response.json()).then((data)=>{

        // console.log(data)
    
        document.getElementById("display").style.display = "block";
    
        var cityValue = data.name;
        var tempValue=(data.main.temp);
    
        var descValue=data.weather[0].description
        var windspeedValue=data.wind.speed;

        city.innerHTML= 'weather of' + ' ' + cityValue;
        temp.innerHTML= 'Temperature:' + ' ' + tempValue;
        desc.innerHTML = 'Sky Conditions:' + ' ' + descValue;
        windspeed.innerHTML ='Wind Speed:'+ ' ' + windspeedValue;

    })
}

    inputValue.addEventListener('submit',input);