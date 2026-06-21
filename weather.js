let cityName=document.getElementById("searchWeatherForCity");
let searchCity=document.getElementById("search");

let API_key="cd0b632bfbe5db75a8b67802a3fe199e";

//for enter manually city name

async function fetchData(city){
   try{
        cityName.value="";
        let result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`)
        let data=await result.json();
        console.log(data);
        displayWeather(data);
   }
   catch(err){
        alert(`Please Enter a Valid City Name, ${city} city is not found`);
   }
}

searchCity.addEventListener('click',()=>{
    fetchData(cityName.value);
})

function displayWeather({city,list}){
    div=`<div class="weatherInfomation">
            <p id="discription">${list[0].weather[0].description}</p>
            <img src="https://openweathermap.org/img/w/${list[0].weather[0].icon}.png" alt="weatherImage">
            <p id="temperature">${list[0].main.temp}℃</p>
            <p id="city">${city.name}</p>
            <div class="otherInfo">
                <div>
                    <p id="pressure">Pressure</p>
                    <p id="pressureValue">${list[0].main.pressure}hPa</p>
                </div>
                <div>
                    <p id="humidity">Humidity</p>
                    <p id="humidityValue">${list[0].main.humidity}%</p>
                </div>
                <div>
                    <p id="windSpeed">Wind Speed</p>
                    <p id="windSpeedValue">${list[0].wind.speed}m/s</p>
                </div>
            </div>
        </div>`
        document.getElementById('outputDiv').innerHTML=div;
}

// for current location

async function fetchDataByCoordinates(latitude,longitude){
   try{
        cityName.value="";
        let result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`)
        let data=await result.json();
        console.log(data);
        displayWeather(data);
   }
   catch(err){
        alert(`Your Location is not Locatable`);
   }
}


let useCurrLoc=document.getElementById("useMyCurrentLocation");
useCurrLoc.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let latitude=position.coords.latitude
        let longitude=position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
        fetchDataByCoordinates(latitude,longitude);
    })
})