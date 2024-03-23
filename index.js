
function getAPIDatas (){
    const APIKey = 'f70bcf43225604b2bb2f9ff0c3b62dcf';
    const location = document.querySelector('.js-search input').value;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}`;

        

    const convertJSON = response => response.json();

    const dataRender = datas => {
        
        if (datas.cod === '404'){
            return alert("Location not found!");

        };

        
        const temperature = `${datas.main.temp} `;
        const city = `${location}`;
        const feelsLike=`Real feel:${datas.main.feels_like} `;
        const description=`${datas.weather[0].description}`;
        const windSpeed = `${datas.wind.speed} `;
        const humidity = `${datas.main.humidity} `;
        const icon = `${datas.weather[0].icon}.png`
        const descriptionImage = `https://openweathermap.org/img/wn/${icon} alt="${description}"`;
        
        const weatherContainer = document.querySelector('.js-container');
        
        weatherContainer.innerHTML=`
                <div class ="weather">
                    
                    <h2 class="city">Weather in ${city} </h2>
                    <div class="temperature">
                        <p class="temp">${temperature}°C</p>
                        <p class="feels-like">${feelsLike}°C</p>
                    </div>
                    
                </div>
                <div class="weather-details">
                    <div class ="description">
                        <img src = ${descriptionImage}></img>
                        <p>${description}</p>
                    </div>
                    <div class="other-information">
                        <div class = "wind-speed">
                            <p>Wind speed:</p>
                            <i class="fa-solid fa-wind"></i>
                            <p class=>${windSpeed}km/h</p>
                        </div>
                        <div class = "humidity">
                            <p>Humidity: </p>
                            <i class="fa-solid fa-water"></i>
                            <p>${humidity}%</p>
                        </div>
                    </div>
                    
                    
                </div>
            `;

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";
        

    };

    


    fetch(API_URL)
        .then(convertJSON)
        .then(dataRender)
        
};


document.querySelector('.search button').addEventListener(
    "click",
    getAPIDatas 
    
);



