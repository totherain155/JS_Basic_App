const js_weather = document.querySelector(".js-weather")

const API_KEY = '37e21d954ac3fbf6e079b260a6df38d3';
const COORDS_LS = 'location';


function getWeather(lat, lng){
   fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
       ).then(function(response){    //서버세어 온 json 데이터이다.
          return response.json()  //가져온 데이터를 처리중이라는 의미이다.
       }).then(function(json){
           const temperature = json.main.temp;
           const myPlace = json.name;
           js_weather.innerText = `${temperature} @ ${myPlace}`;
       });
  }

function saveCoords(location){
   localStorage.setItem(COORDS_LS, JSON.stringify(location));
}

function handleSuccess(location){
 // console.log(location); 
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  
  const coordsObj = {
      latitude,
      longitude
  }
   saveCoords(coordsObj); 
   getWeather(latitude, longitude);

}

function handleFail(){
  console.log('sorry we can not access your location')
}

function askYourLocation(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleFail);
}

function loadCoords(){
    const loadedCoords =localStorage.getItem(COORDS_LS);
    if(loadedCoords === null){
        askYourLocation(); 
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
 loadCoords();
}


init();